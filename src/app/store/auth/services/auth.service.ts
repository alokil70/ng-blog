import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthData } from '../auth.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(body: { email: string; password: string }): Observable<AuthData> {
    return this.httpClient.post<{ accessToken: string }>(
      'http://127.0.0.1:9090/api/auth/login', body);
  }
}
