import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  
  { path: '' , component: HomeComponent },
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'userprofile' , component:UserProfileComponent},

  {
    path: '' , component: UserProfileComponent,
    children : [
      {path:'account',loadChildren:()=>import('./components/account/account.module').then(module=>module.AccountModule)}
    ]
  },

  { path: 'adminprofile' , component:AdminProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
