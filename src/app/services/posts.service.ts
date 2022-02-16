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
     return this.http.get<Ipost[]>(`${environment.apiUrl}/post`)
   }

   getPostById(id:string):Observable<Ipost>{
     return this.http.get<Ipost>(`${environment.apiUrl}/post/${id}`)
   }

   addPost(post:Ipost):Observable<Ipost>{
     return this.http.post<Ipost>(`${environment.apiUrl}/post`,post)
   }
   updatePost(id:string,post:Ipost):Observable<Ipost>{
    return this.http.put<Ipost>(`${environment.apiUrl}/post`,post)
  }

   delete(id:string){
      return this.http.delete(`${environment.apiUrl}/post/${id}`)
   }

}
