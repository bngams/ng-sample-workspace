import { Component, OnInit } from '@angular/core';
import { HelloWorldService, PostService } from 'utils';

@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
  styleUrls: ['./all-posts-page.component.scss'],
  providers: [
    { provide: HelloWorldService, useValue: {
      message: "Custom message from component"
    }}
  ]
})
export class AllPostsPageComponent implements OnInit {

  constructor(private postService: PostService, private hello: HelloWorldService) { }

  ngOnInit(): void {
    console.log('hello', this.hello.message);
    this.postService.getAllPosts().subscribe(
      res => console.log(res)
    );
  }

}
