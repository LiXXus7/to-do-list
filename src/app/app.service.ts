import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ActiveSection = 'lists-overview' | 'list-detail'

export interface List {
  isCreateList?: boolean;
  isEditMode?: boolean;
  name: string;
  tasks: Task[];
}

export interface Task {
  name: string;
  isChecked: boolean;
}

export const createListConfig = {
  name: '',
  isCreateList: true,
  tasks: []
};

enum STORAGE_KEYS {
  LISTS = 'LISTS'
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private savedLists = localStorage.getItem(STORAGE_KEYS.LISTS);
  private lists = this.savedLists ? JSON.parse(this.savedLists) : [{ ...createListConfig }];

  activeSectionSubject = new BehaviorSubject<ActiveSection | null>(null);
  listsSubject = new BehaviorSubject<List[]>(this.lists);
  filteredListIdsSubject = new BehaviorSubject<string[] | null>(null);

  constructor() {
    window.onbeforeunload = () => localStorage.setItem(
      STORAGE_KEYS.LISTS,
      JSON.stringify(this.lists)
    );
  }
}
