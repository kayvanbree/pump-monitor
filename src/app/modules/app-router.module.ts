import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {NotFoundComponent} from '../pages/not-found/not-found.component';
import {SolidAuthenticationGuard} from '../ng-solid-client/guards/solid-authentication-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [SolidAuthenticationGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
