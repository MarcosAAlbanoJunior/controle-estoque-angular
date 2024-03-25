import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserRequest } from 'src/app/models/interfaces/User/SignupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/User/SignupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/User/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/User/auth/AuthResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  singupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse>{

    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`, requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }
}
