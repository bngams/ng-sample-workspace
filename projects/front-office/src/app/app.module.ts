import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VendorsModule } from 'vendors';
import { CounterComponent } from './components/get-started/counter/counter.component';
import { CustomCounterComponent } from './components/get-started/counter/custom-counter.component';
import { ParentHostComponent } from './components/get-started/parent-host.component';
import { SubjectsComponent } from './components/get-started/subjects.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CustomCounterComponent,
    ParentHostComponent,
    SubjectsComponent,
    HeaderComponent,
    HomePageComponent,
    GetStartedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VendorsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
