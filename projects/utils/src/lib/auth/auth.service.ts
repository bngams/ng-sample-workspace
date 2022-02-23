import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { AuthModule } from './auth.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectedSubject = new BehaviorSubject(false);

  constructor() { }

  setIsConnected(status: boolean) {
    console.log('setIsConnected', status);
    this.connectedSubject.next(status);
  }

  checkIsConnected(): boolean {
    // check token
    return false;
  }

  login(user: Partial<User>) {
    // call backend
    // store token cookie
    this.setIsConnected(true);
  }

  logout() {
    // (call backend)
    // delete token
    this.setIsConnected(false);
    // redirect
  }
}
