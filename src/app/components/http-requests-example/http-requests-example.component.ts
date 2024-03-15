import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from 'src/app/components/http-requests-example/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-requests-example',
  templateUrl: './http-requests-example.component.html',
  styleUrls: ['./http-requests-example.component.scss']
})
export class HttpRequestsExampleComponent implements OnInit, OnDestroy {
  public loadedPosts: Post[] = [];
  public isFetching = false;
  public error = null;
  public errorSubscription: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  public ngOnInit() {
    this.errorSubscription = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });

    this.fetchPosts();
  }

  public onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  public onFetchPosts() {
    this.fetchPosts();
  }

  public onClearPosts() {
    // Send Http request
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  public ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }

  public onHandleError(): void {
    this.error = null;
  }

  private fetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
      this.isFetching = false;
    });
  }
}
