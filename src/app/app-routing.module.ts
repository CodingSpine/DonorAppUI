import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AuthService } from './services/auth/auth.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuardService],
        data: {title: 'Dashboard'}
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(
        routes,
        { enableTracing: true }) ], // -> This is only for debugging, remove the entire object before release
  providers: [
        AuthGuardService,
        AuthService
      ]
})


export class AppRoutingModule {}
