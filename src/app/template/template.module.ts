import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template.routing';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [BasicComponent, DynamicComponent, SwitchesComponent, CustomMinDirective],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
