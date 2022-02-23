import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPagesRoutingModule } from './post-pages-routing.module';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { OnePostPageComponent } from './pages/one-post-page/one-post-page.component';
import { HelloWorldService } from 'utils';


@NgModule({
  declarations: [
    AllPostsPageComponent,
    OnePostPageComponent
  ],
  imports: [
    CommonModule,
    PostPagesRoutingModule
  ],
  providers: [
    { provide: HelloWorldService, useValue: {
      message: "Custom message"
    }}
  ]
})
export class PostPagesModule { }
