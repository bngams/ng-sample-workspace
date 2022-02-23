import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPagesRoutingModule } from './account-pages-routing.module';
import { AccountSummaryComponent } from './pages/account-summary/account-summary.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AccountSummaryComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    AccountPagesRoutingModule
  ]
})
export class AccountPagesModule { }
