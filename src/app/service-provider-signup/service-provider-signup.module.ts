import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceProviderSignupPageRoutingModule } from './service-provider-signup-routing.module';

import { ServiceProviderSignupPage } from './service-provider-signup.page';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    SharedModule,
    IonicModule,
    ServiceProviderSignupPageRoutingModule
  ],
  declarations: [ServiceProviderSignupPage]
})
export class ServiceProviderSignupPageModule {}
