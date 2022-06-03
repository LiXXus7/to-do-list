import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListOverviewComponent } from './components/list-overview/list-overview.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckListComponent } from './components/check-list/check-list.component';

const nativeModules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule
];

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListOverviewComponent,
    ListDetailComponent,
    CheckListComponent
  ],
  imports: [
    ...nativeModules,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
