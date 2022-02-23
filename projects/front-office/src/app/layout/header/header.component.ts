import { Component, OnInit } from '@angular/core';
import { AuthService } from 'utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = this.auth.checkIsConnected();
    this.auth.connectedSubject.subscribe(status => {
      console.log('connectedSubject.subscribe', status);
      this.isLoggedIn = status
    });
  }

  logout() {
    this.auth.logout();
  }

}
