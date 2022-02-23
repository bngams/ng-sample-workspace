import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class HelloWorldService {

  constructor() { }

  get message(): string {
    return 'Hello world!!';
  }
}
