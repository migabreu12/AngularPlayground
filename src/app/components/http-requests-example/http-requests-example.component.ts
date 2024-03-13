import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-http-requests-example',
  templateUrl: './http-requests-example.component.html',
  styleUrls: ['./http-requests-example.component.scss']
})
export class HttpRequestsExampleComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService: PostService) {}

  public ngOnInit() {
    this.fetchPosts();
  }

  public onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  public onFetchPosts() {
    this.fetchPosts();
  }

  private fetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  public onClearPosts() {
    // Send Http request
  }
}
