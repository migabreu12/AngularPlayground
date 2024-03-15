import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, tap, throwError } from 'rxjs';
import { Post } from 'src/app/components/http-requests-example/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public error = new Subject<string>();

  constructor(private http: HttpClient) { }

  public createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    // Send Http request
    // This observable will auto clean up itself (unsubscribe) since
    // it's provided by angular's default library.
    // Observables will not fire/trigger unless there's a subscription
    return this.http.post<{ name: string }>(
      "https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json",
      postData,
      // Example of requesting more than just the response data from the body
      {
        // Body is default; Response gives the entire response object
        observe: "response"
      }
    ).subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message);
    });
  }

  public fetchPosts(): Observable<Post[]> {
    // A way to add multiple params outside of the http request. This variable is not used but left in
    // as an example
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("Custom", "Key");

    return this.http
    // This is another way to assign the type of the response data (before it even gets to pipes)
    // The <...> after the get can be removed to be of type any
    // Setting the response data type using <...> is available on all types of requests
    .get<{ [key: string]: Post }>(
      "https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json",
      {
        // Example of sending a custom header with a value as part of the request
        headers: new HttpHeaders({"Custom-Header": "Hello"}),
        // This way is better to send query params than updating the url
        // This is an inline approach to adding multiple params
        params: new HttpParams().set("print", "pretty").set("Custom", "Key")
        // Example of using variable
        // params: searchParams
      })
    .pipe(
      // THis is one way to assign the type of the response data
      // map((responseData: { [key: string]: Post }) => {
      map(responseData => {
        const postsArray: Post[] = [];
        for(let key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            // Creates a new object where ... then flattens the existing object to be individual
            // objects that will be added as a property of the new object we're creating.
            // the Key is a new property we're adding to the new object.
            postsArray.push({ ...responseData[key], id: key });
          }
        }

        return postsArray;
      }),
      catchError(errorResponse => {
        // Do other things like send to analytics server for example
        console.log(errorResponse);
        return throwError(errorResponse);
      })
    );
  }

  public clearPosts() {
    return this.http.delete(
        "https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json",
        {
          observe: "events"
        }
      ).pipe(
        // Tap let's us do something with the response but does not allow modification of the
        // value that will be passed on to subscriptions; As a result, you don't need to
        // use the return keyword since you'll get the data, do something with the data,
        // and then the pipe will continue along.
        tap((event) => {
          console.log(event);
          // You can use the . operator here to see what the different types of HttpEventTypes are available
          if(event.type === HttpEventType.Sent) {
            // You can react to getting this event type by maybe updating the
            // UI to show that the message was sent and we're waiting or update
            // the UI to show that the message was sent.
          }

          if(event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
