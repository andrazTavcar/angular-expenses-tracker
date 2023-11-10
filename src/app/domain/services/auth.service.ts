import { Injectable } from '@angular/core';

// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {environment} from "../../../environments/environment.development";

import {MatSnackBar} from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);
  constructor(private _snackBar: MatSnackBar) {}

  public _signInWithEmailAndPassword(email: string, password: string){
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this._snackBar.open(errorMessage, 'Close', {
          horizontalPosition: "end",
          verticalPosition: "top",
        });
        console.error(errorMessage);
      });
  }
}
