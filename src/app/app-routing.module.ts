import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'customer-signup',
    loadChildren: () => import('./customer-signup/customer-signup.module').then( m => m.CustomerSignupPageModule)
  },
  {
    path: 'service-provider-signup',
    loadChildren: () => import('./service-provider-signup/service-provider-signup.module').then( m => m.ServiceProviderSignupPageModule)
  },
  {
    path: 'service-provider-services',
    loadChildren: () => import('./service-provider-services/service-provider-services.module').then( m => m.ServiceProviderServicesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
