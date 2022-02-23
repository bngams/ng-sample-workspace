import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AccountPagesModule } from './account/account-pages.module';
import { PostPagesModule } from './post/post-pages.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from 'utils';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  { path: 'home', resolve: [], component: HomePageComponent},
  { path: 'get-started', canActivate: [UserGuard], data: { permissions: [{resources: 'user', mod: ['r', 'w']}] }, component: GetStartedComponent},
  { path: 'account', canLoad: [], loadChildren: () => import('./account/account-pages.module').then(m => AccountPagesModule) },
  { path: 'posts', loadChildren: () => import('./post/post-pages.module').then(m => PostPagesModule) },
  { path: 'auth', component: LoginPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
