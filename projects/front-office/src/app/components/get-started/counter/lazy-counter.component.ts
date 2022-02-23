import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-lazy-counter',
  template: `
    <p>
      custom-counter works!
    </p>
  `,
  styleUrls: ['./counter.component.scss']
})
export class LazyCounterComponent extends CounterComponent {

  constructor() {
    super()
  }

}
