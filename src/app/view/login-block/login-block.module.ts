import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormUiComponent,
    LoginBlockComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [LoginBlockComponent]
})
export class LoginBlockModule { }
