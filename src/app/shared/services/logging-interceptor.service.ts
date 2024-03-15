import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Here is the logging interceptor");
    console.log("URL is: " + req.url);

    return next.handle(req)
      .pipe(
        tap((event) => {
          if(event.type === HttpEventType.Response) {
            console.log("Handling the response within the logging interceptor");
            console.log(event.body);
          }
        })
      )
  }
}
