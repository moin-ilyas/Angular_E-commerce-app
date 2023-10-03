import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { CardsComponent } from './cards/cards.component';
import { MycolorDirective } from './directives/mycolor.directive';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SearchPipe } from './pipes/search.pipe'
@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    CardsComponent,
    MycolorDirective,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
