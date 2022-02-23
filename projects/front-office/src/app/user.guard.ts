import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelloWorldService } from 'utils';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private helloService: HelloWorldService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('in userguard; data from route : ', route.data);
      console.log('in userguard; hello from service : ', this.helloService.message);
      return true;
  }

}
