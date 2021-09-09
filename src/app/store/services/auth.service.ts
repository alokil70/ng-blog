import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(body: { email: string; password: string }) {
    return this.httpClient.post<{ accessToken: string }>(
      'http://127.0.0.1:9090/api/auth/login',
      body,
    );
  }
}
