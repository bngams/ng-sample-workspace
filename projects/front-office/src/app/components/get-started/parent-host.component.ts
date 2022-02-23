import { Component, Host, OnInit, Optional } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-parent-host',
  template: `
    <p>
      parent-host works!
    </p>
  `,
  styles: [
  ]
})
export class ParentHostComponent implements OnInit {

  constructor(@Optional() @Host() private parent: AppComponent) { }

  ngOnInit(): void {
    console.log('Parent element ', this.parent);
  }

}
