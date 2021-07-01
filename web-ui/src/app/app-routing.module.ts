import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

const redirectLoggedInToSenderDashboard = () =>
  redirectLoggedInTo(['sender-dash-board']);
const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(['sign-in']);

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: 'sign-in',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToSenderDashboard },
    loadChildren: () =>
      import('./routing/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'sender-dash-board',
    loadChildren: () =>
      import('./routing/sender-dash-board/sender-dash-board.module').then(
        (m) => m.SenderDashBoardModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToSignIn },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
