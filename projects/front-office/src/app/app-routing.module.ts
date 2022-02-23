import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { AccountPagesModule } from './account/account-pages.module';
import { PostPagesModule } from './post/post-pages.module';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'account', loadChildren: () => import('./account/account-pages.module').then(m => AccountPagesModule) },
  { path: 'posts', loadChildren: () => import('./post/post-pages.module').then(m => PostPagesModule) },
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
