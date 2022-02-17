import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ipost } from '../../../models/ipost.model';
import { PostsService } from '../../../services/posts.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  @Input() post?: Ipost;
  date = new Date();
  postForm:FormGroup;
 
  constructor(public activeModal: NgbActiveModal,
    private postsServices:PostsService,
    private datePipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.initPostForm();
  }

  createEditPost(){
    const {id} = this.post || {};
    (!id ? this.postsServices.addPost(this.postForm.value) :
     this.postsServices.updatePost(id,this.postForm.value)).subscribe((res)=>{
      this.activeModal.close(res);      
    })
  }
  get fPost(){
    return this.postForm.controls;
  }
  initPostForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, Validators.required),
      body: new FormControl(this.post?.body, Validators.required),
      date: new FormControl(this.datePipe.transform(this.date, 'short'))
    })
  }


}
