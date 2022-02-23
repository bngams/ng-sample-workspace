import { ChangeDetectionStrategy, Component, Host, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works: {{ counter }}
    </p>
  `,
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  @Input()
  counter = 1;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.counter = 0;
  }

}
