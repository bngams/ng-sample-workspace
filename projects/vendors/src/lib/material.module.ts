import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
