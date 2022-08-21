import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic', component: BasicComponent },
      { path: 'dynamic', component: DynamicComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basic' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
