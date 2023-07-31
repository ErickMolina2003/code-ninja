import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CarpetasComponent } from './components/carpetas/carpetas.component';
import { CodeComponent } from './components/code/code.component';
import { ArchivosComponent } from './components/archivos/archivos.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'carpetas',
        component: CarpetasComponent,
      },
      {
        path: 'code',
        component: CodeComponent,
      },
      {
        path: 'archivos',
        component: ArchivosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
