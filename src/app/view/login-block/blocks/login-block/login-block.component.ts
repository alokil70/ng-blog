import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as auth from '../../../../store/auth/auth.selectors';
import { login } from '../../../../store/auth/auth.actions';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
})
export class LoginBlockComponent implements OnInit {
  loaded$: Observable<boolean> = this.store$.pipe(select(auth.getLoaded));
  loading$: Observable<boolean> = this.store$.pipe(select(auth.getLoading));
  serverError$: Observable<string> = this.store$.pipe(select(auth.getServerError));

  constructor(private store$: Store) {}

  ngOnInit(): void {}

  onLogin(payload: { email: string; password: string }) {
    console.log('onLogin', payload);
    this.store$.dispatch(login(payload));
  }
}
