import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginFormUiComponent,
    LoginBlockComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule
    ],
  exports: [LoginBlockComponent]
})
export class LoginBlockModule { }
