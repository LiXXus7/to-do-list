import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AppService, createListConfig, List } from 'src/app/app.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit, OnDestroy {
  @ViewChild('listNameInput') listNameInput: ElementRef | null = null;

  lists: List[] = [];

  private unsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.listsSubject
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(lists => this.lists = lists);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  editName(list: List) {
    list.isEditMode = true;
    setTimeout(() => {
      const inputElement = this.listNameInput?.nativeElement;
      inputElement?.focus();
      inputElement?.select();
    });
  }

  createList(list: List) {
    list.isCreateList = false;
    this.editName(list);
  }

  onNameInputBlur(list: List) {
    list.isEditMode = false;

    if (!list.name) {
      this.lists.splice(this.lists.indexOf(list), 1);
    }

    const foundCreateList = this.lists.find(list => list.isCreateList === true);
    if (!foundCreateList) {
      this.lists.push({ ...createListConfig });
    }
  }

  clickedList(list: any) {
    this.router.navigate([list.name], { relativeTo: this.activedRoute });
  }

  deleteList(list: List) {
    this.lists.splice(this.lists.indexOf(list), 1);
  }
}
