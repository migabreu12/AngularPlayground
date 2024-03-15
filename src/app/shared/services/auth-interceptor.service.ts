import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req is immutable so a new one must be created in order to "modify" the request
    const modifiedRequest = req.clone(
      {
        headers: req.headers.append("AuthKey", "xyz").append("InternalRequest", "true")
      }
    );
    console.log("This is the moment before the request get's sent.");
    // The following line allows the request to "continue" to be sent
    // return next.handle(req) is required or else the interceptor stops/breaks requests
    // Handle allows for modifying the response as well; We'll always get the event type as
    // the response object
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        if(event.type === HttpEventType.Response) {
          console.log("The response has arrived! Body Data: ");
          console.log(event.body);
        }
      })
    );
  }
}
