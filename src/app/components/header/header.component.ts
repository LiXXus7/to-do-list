import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ActiveSection, AppService, List } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() title = '';

  activeSection: ActiveSection | null = null;
  lists: List[] = [];

  private _inputValue = '';
  get inputValue() {
    return this._inputValue;
  }
  set inputValue(value) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { search: value ? value : null },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  private unsubscribe = new Subject<void>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.unsubscribe)).subscribe((queryParamMap) => {
      const searchParam = queryParamMap.get('search') ?? '';

      if (searchParam !== this.inputValue) {
        let filteredListIds: string[] | null = [];

        for (const list of this.lists) {
          const foundTask = list.tasks.find(t => t.name.includes(searchParam));
          if (list.name.includes(searchParam) || foundTask) {
            filteredListIds?.push(list.name);
          }
        }

        if (!searchParam) {
          filteredListIds = null;
        }

        this.appService.filteredListIdsSubject.next(filteredListIds);
        this._inputValue = searchParam;
      }
    });

    this.appService.activeSectionSubject.pipe(takeUntil(this.unsubscribe)).subscribe(activeSection => {
      this.activeSection = activeSection;
    });

    this.appService.listsSubject.pipe(takeUntil(this.unsubscribe)).subscribe(lists => {
      this.lists = lists;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
