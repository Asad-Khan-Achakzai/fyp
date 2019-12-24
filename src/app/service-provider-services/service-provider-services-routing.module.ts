import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceProviderServicesPage } from './service-provider-services.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceProviderServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceProviderServicesPageRoutingModule {}
