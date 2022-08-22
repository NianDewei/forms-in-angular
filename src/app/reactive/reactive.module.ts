import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  declarations: [BasicComponent, DynamicComponent, SwitchesComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
  exports: [BasicComponent, DynamicComponent],
})
export class ReactiveModule {}
