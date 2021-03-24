import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoginComponent } from './lazy-login/lazy-login.component';
import { LazySignupComponent } from './lazy-signup/lazy-signup.component';


@NgModule({
  declarations: [LazyLoginComponent, LazySignupComponent],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
