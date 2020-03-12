import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post.model';
import {PostsService} from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  fetching = false;
  error = null;

  constructor(private http: HttpClient,
              private postsService: PostsService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    this.postsService.deletePosts();
    this.fetchPosts();
  }

  private fetchPosts() {
    this.fetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.loadedPosts = posts;
      this.fetching = false;
    }, error => {
      this.fetching = false;
      this.error = error.message;
    });
  }
}
