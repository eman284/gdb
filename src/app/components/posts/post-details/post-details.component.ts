import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { Ipost } from '../../../models/ipost.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId?: string;
  post?: Ipost;
  constructor(
    private postServices:PostsService,
    private activeRoute:ActivatedRoute
  ) { 
   
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>{
      this.postId = params.get('postId') as string;
    })
    this.getPostById();
  }

  getPostById(){
    this.postServices.getPostById(Number(this.postId)).subscribe(res =>{
        this.post = res;
    })
  }
}
