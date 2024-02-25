import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServerComponent } from './components/app-server/app-server.component';
import { WarningBannerComponent } from './components/warning-banner/warning-banner.component';
import { SuccessBannerComponent } from './components/success-banner/success-banner.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Assignment4Module } from './components/assignment4/assignment4.module';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { Assignment5Module } from './components/assignment5/assignment5.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    WarningBannerComponent,
    SuccessBannerComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    Assignment4Module,
    Assignment5Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
