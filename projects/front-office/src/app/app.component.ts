import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { HelloWorldService } from 'utils';
import { CounterComponent } from './components/get-started/counter/counter.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('spanTitle', { static: true, read: ElementRef })
  spanTitle!: ElementRef;

  @ViewChild('host', { static: true, read: ViewContainerRef })
  host!: ViewContainerRef;

  @ViewChildren('li', {read: ElementRef }) myItemList!: QueryList<ElementRef>

  @ViewChild('ct', {read: CounterComponent }) mainCounter!: CounterComponent
  @ViewChildren(CounterComponent) counters!: QueryList<CounterComponent>


  title = 'front-office';

  constructor(helloWorldService: HelloWorldService, private cfr: ComponentFactoryResolver) {
    this.title = helloWorldService.message;
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('spanTitle ', this.spanTitle);
  }


  resetCounter() {
    this.mainCounter.reset();
  }

  resetAllCounter() {
    this.counters.forEach( ct => ct.reset());
  }

  /**
   * Load a component in a viewContainerRef (can be setup with ViewChild)
   */
  loadComponent() {
    const viewContainerRef = this.host;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<CounterComponent>(CounterComponent);
  }

  /**
   * Load a dynamic lazy loaded component in a viewContainerRef
   */
  async loadLazyComponent() {
    const viewContainerRef = this.host;
    viewContainerRef.clear();
    const { LazyCounterComponent } = await import('./components/get-started/counter/lazy-counter.component');
    const componentRef = viewContainerRef.createComponent(this.cfr.resolveComponentFactory(LazyCounterComponent));
  }
}
