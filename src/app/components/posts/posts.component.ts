import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../models/ipost.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postItems:Ipost[] = [];
  constructor(
    private postService:PostsService,
    private modalService: NgbModal
    ) {
   }

  // get all post method
   getAllPosts() : void{
     this.postService.getAllPosts().subscribe((res)=>{
       this.postItems =  res;
       console.log(this.postItems);
     })
   }

   // Add Edit Post
   addEditPost(post?:Ipost,index?:number){
    const modal = this.modalService.open(AddEditPostComponent);
    (modal.componentInstance as AddEditPostComponent).post = post;
    const closeSubscription = modal.closed.subscribe((updatePost: Ipost) => {
      if(updatePost){
        if(typeof index === 'number'){
          this.postItems?.splice(index,1,updatePost);
        }else{
          this.postItems?.push(updatePost);
          this.getAllPosts();
        }
      }
      closeSubscription.unsubscribe();
    });
  }
  readMore(id?:string, post?:Ipost){
    const UpdateStatus = {...post , isRead:true}
    this.postService.updatePost(id,UpdateStatus).subscribe(()=>{
      console.log('update success')
    })
  }

  // delete post method
   deletePost(postId:string,index:number):void{
      this.postService.delete(postId).subscribe(()=>{
        this.postItems?.splice(index,1);
        this.getAllPosts();
      })
   }

  ngOnInit(): void {
    // initialize get all post
    this.getAllPosts();
  }

}
