import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { OnePostPageComponent } from './pages/one-post-page/one-post-page.component';

const routes: Routes = [
  { path: '', component: AllPostsPageComponent },
  { path: '/:id', component: OnePostPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostPagesRoutingModule { }
