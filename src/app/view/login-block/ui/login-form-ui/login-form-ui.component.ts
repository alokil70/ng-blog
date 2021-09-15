import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../store/auth/services/auth.service';

@Component({
  selector: 'app-login-form-ui',
  templateUrl: './login-form-ui.component.html',
  styleUrls: ['./login-form-ui.component.scss'],
})
export class LoginFormUiComponent implements OnInit {
  formGroup: FormGroup;
  isAuth = this.authService.isAuth$;

  @Input() formError = '';
  @Input() disabled: boolean;
  @Output() output = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  onFormChange() {
    this.formError = '';
  }

  onFormSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.output.emit(this.formGroup.value);
  }
}
