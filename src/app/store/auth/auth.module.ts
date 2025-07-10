// src/app/components/auth/auth.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../auth/login-form/login-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginFormComponent
  ],
  exports: [LoginFormComponent]
})
export class AuthModule {}
