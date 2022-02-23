import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { HelloWorldService } from './hello-world.service';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    AuthModule
  ],
  providers: [
    HelloWorldService
  ]
})
export class UtilsModule { }
