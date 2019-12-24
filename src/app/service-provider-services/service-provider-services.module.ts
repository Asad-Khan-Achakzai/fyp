import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceProviderServicesPageRoutingModule } from './service-provider-services-routing.module';

import { ServiceProviderServicesPage } from './service-provider-services.page';
import { ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagInputModule,
    ReactiveFormsModule,
    IonicModule,
    ServiceProviderServicesPageRoutingModule
  ],
  declarations: [ServiceProviderServicesPage]
})
export class ServiceProviderServicesPageModule {}
