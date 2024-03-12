import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-http-requests-example',
  templateUrl: './http-requests-example.component.html',
  styleUrls: ['./http-requests-example.component.scss']
})
export class HttpRequestsExampleComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // This observable will auto clean up itself (unsubscribe) since
    // it's provided by angular's default library.
    // Observables will not fire/trigger unless there's a subscription
    this.http.post(
      "https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json",
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get("https://udemyangularcourse-16627-default-rtdb.firebaseio.com/posts.json")
      .pipe(map(responseData => {
        const postsArray = [];
        for(let key in responseData) {
          if(responseData.hasOwnProperty(key)) {
            // Creates a new object where ... then flattens the existing object to be individual
            // objects that will be added as a property of the new object we're creating.
            // the Key is a new property we're adding to the new object.
            postsArray.push({ ...responseData[key], id: key });
          }
        }

        return postsArray;
      }))
      .subscribe(responseData => {
        console.log(responseData);
      })
  }
}
