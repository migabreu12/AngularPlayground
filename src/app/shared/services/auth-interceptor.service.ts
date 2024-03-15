import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("This is the moment before the request get's sent.");
    // The following line allows the request to "continue" to be sent
    // return next.handle(req) is required or else the interceptor stops/breaks requests
    return next.handle(req);
  }
}
