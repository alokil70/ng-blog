import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormUiComponent, LoginBlockComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginBlockComponent],
})
export class LoginBlockModule {}
