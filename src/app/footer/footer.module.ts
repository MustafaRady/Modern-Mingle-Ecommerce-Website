// home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent
  }
];

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
