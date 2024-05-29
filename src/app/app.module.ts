import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Group1Component } from './components/group-1/group-1.component';
import { Group2Component } from './components/group-2/group-2.component';
import { Group3Component } from './components/group-3/group-3.component';
import { Group4Component } from './components/group-4/group-4.component';
import { Group5Component } from './components/group-5/group-5.component';
import { Group6Component } from './components/group-6/group-6.component';
import { Group7Component } from './components/group-7/group-7.component';
import { Group8Component } from './components/group-8/group-8.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Group1Component,
    Group2Component,
    Group3Component,
    Group4Component,
    Group5Component,
    Group6Component,
    Group7Component,
    Group8Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
