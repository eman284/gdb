import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Ipost } from '../models/ipost.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http:HttpClient) {
   }
  
   getAllPosts():Observable<Ipost[]> {
     return this.http.get<Ipost[]>(`${environment.apiUrl}/posts`)
   }

   getPostById(id:number):Observable<Ipost>{
     return this.http.get<Ipost>(`${environment.apiUrl}/posts/${id}`)
   }

   addPost(post:Ipost):Observable<Ipost>{
     return this.http.post<Ipost>(`${environment.apiUrl}/posts`,JSON.stringify(post))
   }
   updatePost(id:number,post:Ipost):Observable<Ipost>{
    return this.http.put<Ipost>(`${environment.apiUrl}/posts/${id}`,JSON.stringify(post))
  }

   delete(id:number){
      return this.http.delete(`${environment.apiUrl}/posts/${id}`)
   }

}
