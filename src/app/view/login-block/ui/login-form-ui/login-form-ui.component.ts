import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss'],
})
export class LoginFormUiComponent implements OnInit {

  formGroup: FormGroup;

  @Input() formError = '';
  @Output() login = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onFormChange() {
    this.formError += '';
  }

  onFormSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.login.emit(this.formGroup.value);
  }
}
