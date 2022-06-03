import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { AppService, List } from 'src/app/app.service';
import { ActionEvent } from '../check-list/check-list.component';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit, OnDestroy {
  @ViewChild('newTaskInput') newTaskInput: ElementRef | null = null;

  lists: List[] = [];

  listName = '';

  newTaskInputValue = '';
  isNewTaskInputActive = false;

  get list() {
    return this.lists.find(list => list.name === this.listName);
  }

  get tasks() {
    return this.list ? this.list.tasks.filter(t => !t.isChecked) : [];
  }

  get checkedTasks() {
    return this.list ? this.list.tasks.filter(t => t.isChecked) : [];
  }

  private unsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.unsubscribe),
      map(params => params['id'])
    ).subscribe(id => this.listName = id);

    this.appService.listsSubject.pipe(takeUntil(this.unsubscribe)).subscribe(
      lists => this.lists = lists
    );
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  navigateBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  onAddTask() {
    this.isNewTaskInputActive = true;
    setTimeout(() => this.newTaskInput?.nativeElement.focus());
  }

  addTask() {
    if (this.newTaskInputValue) {
      this.list?.tasks.push({
        name: this.newTaskInputValue,
        isChecked: false
      });
    }

    this.newTaskInputValue = '';
    this.isNewTaskInputActive = false;
  }

  onKeydownEnter() {
    this.addTask();
    this.onAddTask();
  }

  onChecklistAction(event: ActionEvent) {
    if (event.type === 'delete') {
      this.list?.tasks.splice(this.list.tasks.indexOf(event.task), 1);
    }
  }
}
