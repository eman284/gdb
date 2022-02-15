import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditPostComponent } from './components/posts/add-edit-post/add-edit-post.component';
import { GdbModule } from './gdb/gdb.module';
import { CopmonentOneComponent } from './components/copmonent-one/copmonent-one.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    TruncatePipe,
    PostDetailsComponent,
    AddEditPostComponent,
    CopmonentOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    NgbModule,
    GdbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
