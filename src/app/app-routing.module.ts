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
import { ColorhighlightComponent } from './components/colorhighlight/colorhighlight.component';
import { PlansComponent } from './components/plans/plans.component';

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
        path: 'folders',
        component: CarpetasComponent,
      },
      {
        path: 'code',
        component: CodeComponent,
      },
      {
        path: 'files',
        component: ArchivosComponent,
      },
      {
        path: 'color',
        component: ColorhighlightComponent,
      },
      {
        path: 'plans',
        component: PlansComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
