import { Component, OnInit } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-custom-counter',
  template: `
    <p>
      custom-counter works!
    </p>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CustomCounterComponent extends CounterComponent {

  constructor() {
    super()
  }

}
