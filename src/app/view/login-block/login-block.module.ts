import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyboardComponent } from './blocks/keyboard/keyboard.component';

@NgModule({
  declarations: [LoginFormUiComponent, LoginBlockComponent, KeyboardComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginBlockComponent],
})
export class LoginBlockModule {}
