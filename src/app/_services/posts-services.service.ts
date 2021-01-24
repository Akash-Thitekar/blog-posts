import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostsServicesService {

  constructor( private http: HttpClient) { }

  getPosts(page: number): Observable<any> {
    const url = 'https://gorest.co.in/public-api/posts?page='+page;
    return this.http.get(url).pipe( map ( res => res));
  }

  getPostDetail(id): Observable<any> {
    const url = 'https://gorest.co.in/public-api/posts/'+id;
    return this.http.get(url).pipe ( map (res => res));
  }

  getPostComment(id): Observable<any> {
    const url = 'https://gorest.co.in/public-api/posts/'+id+'/comments';
    return this.http.get(url).pipe( map ( res => res));
  }
}
