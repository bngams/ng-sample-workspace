import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  template: `
    <p>
      subjects works!
    </p>
  `,
  styles: [
  ]
})
export class SubjectsComponent implements OnInit {
  // pas de valeur sotckée
  // pas possible de récupérer une valeur
  // multicast
  subject$ = new Subject<number>();
  // rejouer les précédents events lors d'une  nouvelle subscription
  replaySubject$ = new ReplaySubject<number>();
  // conserve toujours une valeur (comme un replay mais de 1 valeur)
  behaviorSubject$ = new BehaviorSubject<number>(0);

  constructor() { }

  ngOnInit(): void {
    this.initAndSubOnSubject();
    this.initAndSubOnReplaySubject();
  }

  initAndSubOnSubject(): void {
    this.subject$.subscribe(x => console.log('subject sub 1 ', x));
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
    this.subject$.subscribe(x => console.log('subject sub 2 ', x));
    this.subject$.next(4);
  }

  initAndSubOnReplaySubject(): void {
    this.replaySubject$.subscribe(x => console.log('replay subject sub 1 ', x));
    this.replaySubject$.next(1);
    this.replaySubject$.next(2);
    this.replaySubject$.next(3);
    this.replaySubject$.subscribe(x => console.log('replay subject sub 2 ', x));
    this.replaySubject$.next(4);
  }

}
