import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from 'src/app/components/http-requests-example/services/post.service';

@Component({
  selector: 'app-http-requests-example',
  templateUrl: './http-requests-example.component.html',
  styleUrls: ['./http-requests-example.component.scss']
})
export class HttpRequestsExampleComponent implements OnInit {
  public loadedPosts: Post[] = [];
  public isFetching = false;
  public error = false;


  constructor(private http: HttpClient, private postService: PostService) {}

  public ngOnInit() {
    this.fetchPosts();
  }

  public onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content).subscribe(() => {
      // Can be handled better
      this.fetchPosts();
    });
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
