// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, UserCredential, User } from "firebase/auth";
import { Observable, from, map } from 'rxjs';
import { LoginResponse } from '../auth/model/login-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    auth = getAuth();

    register(email: string, password: string): Observable<LoginResponse> {
        return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
          map((userCredential: UserCredential) => {
            // Extract user information from userCredential and format it into LoginResponse
            const user: LoginResponse['user'] = {
              id: userCredential.user.uid, // Assuming Firebase returns user ID
              username: '', // You may need to get the username from the user profile
              email: userCredential.user.email || '' // Email from userCredential

            };
            const accessToken: string = userCredential.user.refreshToken;
            return { user,accessToken }; // Return LoginResponse object
          })
        );
    }

    login(
        email:string,password:string
    ):Observable<LoginResponse> {
        // return from(signInWithEmailAndPassword(this.auth,email,password))
        
        return from(signInWithEmailAndPassword(this.auth,email,password)).pipe(
            map((userCredential: any) => {
                const user :LoginResponse['user'] = {
                    id: userCredential.user.uid,
                    username: '',
                    email: userCredential.user.email || ''
                }
                
                const accessToken :string = userCredential['_tokenResponse'].idToken;
                return {user,accessToken};
            })

        );
    }
}
