import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private ngZone: NgZone
  ) {}

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // this.ngZone.run(() => {
        //   this.router.navigate(['dashboard']);
        // });
        // this.SetUserData(result.user);
        console.log('success', result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
