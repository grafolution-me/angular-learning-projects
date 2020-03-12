import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
  }

  createAStorePost(title: string, content: string) {
    const postData: Post = {title, content};
    this.http.post<{ [key: string]: Post }>(
      'https://angular-http-f58ac.firebaseio.com/posts.json',
      postData)
      .subscribe(responseData => {
        console.log(responseData);

      });
  }

  fetchPosts() {
    return this.http.get<{ name: string }>('https://angular-http-f58ac.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: new HttpParams().set('print', 'pretty')
      }
    )
      .pipe(
        map((response) => {
          const postsArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              postsArray.push({...response[key], id: key});
            }
          }
          return postsArray;
        }),
        catchError((err) => {
          return throwError(err);
        }));
  }

  deletePosts() {
    this.http.delete('https://angular-http-f58ac.firebaseio.com/posts.json', {
      observe: 'events',
      responseType: 'json'
    }).pipe(tap(event => {
      if (event.type === HttpEventType.Response) {
      }
    })).subscribe();
  }

}
