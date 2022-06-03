import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  private _inputValue = '';
  get inputValue() {
    return this._inputValue;
  }
  set inputValue(value) {
    if (value !== this._inputValue) {
      this._inputValue = value;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
