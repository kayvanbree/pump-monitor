import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {NotFoundComponent} from '../pages/not-found/not-found.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {OktaAuthGuard, OktaCallbackComponent, OktaLoginRedirectComponent} from '@okta/okta-angular';

const routes: Routes = [
  {path: 'callback', component: OktaCallbackComponent},
  {path: 'login', component: OktaLoginRedirectComponent},
  {path: 'home', component: HomeComponent, canActivate: [OktaAuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [OktaAuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {
}
