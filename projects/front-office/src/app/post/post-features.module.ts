import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './features/post-list/post-list.component';
import { PostListItemComponent } from './features/post-list-item/post-list-item.component';
import { PostComponent } from './features/post/post.component';

@NgModule({
  declarations: [
  
    PostListComponent,
       PostListItemComponent,
       PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostFeaturesModule { }
