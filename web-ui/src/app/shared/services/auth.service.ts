import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';
import { User } from './user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore,
    private ngZone: NgZone
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['dashboard']);
        // });
        this.setUserData(result.user);
        console.log('success', result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new auth.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider: auth.auth.AuthProvider) {
    return this.angularFireAuth
      .signInWithRedirect(provider)
      .then((result) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['dashboard']);
        // });
        // this.setUserData(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(
      `users/${user.uid}`
    );
  }
}
