import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/app.service';

export interface ActionEvent {
  type: 'delete';
  task: Task;
}

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  @Output() action = new EventEmitter<ActionEvent>();

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAction(event: ActionEvent) {
    this.action.emit({ type: event.type, task: event.task });
  }
}
