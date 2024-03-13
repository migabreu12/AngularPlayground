import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
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
      postData
    ).subscribe(responseData => {
      console.log(responseData)
    }, error => {
      this.error.next(error.message);
    });
  }

  public fetchPosts(): Observable<Post[]> {
    return this.http
    // This is another way to assign the type of the response data (before it even gets to pipes)
    // The <...> after the get can be removed to be of type any
    // Setting the response data type using <...> is available on all types of requests
    .get<{ [key: string]: Post }>("https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json")
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
    return this.http.delete("https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json");
  }
}
