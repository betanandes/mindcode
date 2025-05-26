import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-options',
    loadChildren: () => import('./login-options/login-options.module').then( m => m.LoginOptionsPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
    {
    path: 'main-screen',
    loadChildren: () => import('./main-screen/main-screen.module').then( m => m.MainScreenPageModule)
  },  {
    path: 'front-mode',
    loadChildren: () => import('./front-mode/front-mode.module').then( m => m.FrontModePageModule)
  },
  {
    path: 'full-mode',
    loadChildren: () => import('./full-mode/full-mode.module').then( m => m.FullModePageModule)
  },
  {
    path: 'back-mode',
    loadChildren: () => import('./back-mode/back-mode.module').then( m => m.BackModePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
