import {NgModule} from '@angular/core';
import {provideRouter, Routes} from '@angular/router';
import {AuthComponent} from "./presentation/auth/auth.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', pathMatch: 'full', component: AuthComponent },
];

@NgModule({
  providers: [
    provideRouter(routes)
  ]
})
export class AppRoutingModule {
}
