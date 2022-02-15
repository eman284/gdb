import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../../models/ipost.model';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  @Input() post?: Ipost;
  postForm:FormGroup;
  constructor(public activeModal: NgbActiveModal,
    private postsServices:PostsService
    ) { }

  ngOnInit(): void {
    this.initPostForm();
  }
  createEditPost(){
    console.log(this.postForm.value);
    const {id} = this.post || {};
    (!id ? this.postsServices.addPost(this.postForm.value) :
     this.postsServices.updatePost(id,this.postForm.value)).subscribe((res)=>{
      this.activeModal.close(res);      
    })
  }
  initPostForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, Validators.required),
      body: new FormControl(this.post?.body, Validators.required)
    })
  }

}
