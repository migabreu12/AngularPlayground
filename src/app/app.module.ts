import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppServerComponent } from './components/app-server/app-server.component';
import { WarningBannerComponent } from './components/warning-banner/warning-banner.component';
import { SuccessBannerComponent } from './components/success-banner/success-banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Assignment4Module } from './components/assignment4/assignment4.module';
import { BasicHighlightDirective } from './shared/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/directives/better-highlight.directive';
import { UnlessDirective } from './shared/directives/unless.directive';
import { Assignment5Module } from './components/assignment5/assignment5.module';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ChildRouteExampleComponent } from './components/child-route-example/child-route-example.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './shared/services/auth.service';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { AuthTestComponent } from './components/auth-test/auth-test.component';
import { ObservablesExampleComponent } from './components/observables-example/observables-example.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { HeaderComponent } from './components/header/header.component';
import { Assignment6Component } from './components/assignment6/assignment6.component';
import { TemplateDrivenFormExampleComponent } from './components/forms-example/template-driven-form-example/template-driven-form-example.component';
import { ReactiveFormExampleComponent } from './components/forms-example/reactive-form-example/reactive-form-example.component';
import { Assignment7Component } from './components/assignment7/assignment7.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { ShortenPipe } from './shared/pipes/shorten.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { Assignment8Component } from './components/assignment8/assignment8.component';
import { ReverseNamePipe } from './shared/pipes/reverse-name.pipe';
import { GemstoneSortPipe } from './shared/pipes/gemstone-sort.pipe';
import { HttpRequestsExampleComponent } from './components/http-requests-example/http-requests-example.component';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    WarningBannerComponent,
    SuccessBannerComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    HomeComponentComponent,
    ChildRouteExampleComponent,
    PageNotFoundComponent,
    LoggedInComponent,
    AuthTestComponent,
    ObservablesExampleComponent,
    FormsExampleComponent,
    HeaderComponent,
    Assignment6Component,
    TemplateDrivenFormExampleComponent,
    ReactiveFormExampleComponent,
    Assignment7Component,
    PipesExampleComponent,
    ShortenPipe,
    FilterPipe,
    Assignment8Component,
    ReverseNamePipe,
    GemstoneSortPipe,
    HttpRequestsExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    Assignment4Module,
    Assignment5Module,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // The provide: HTTP_INTERCEPTORS tells angular that it will run all interceptor services
  // before any request leaves the app. The multi portion allows for angular to continue
  // using existing interceptors and not allow for the servcie to "overwrite" existing
  // interceptors.
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
