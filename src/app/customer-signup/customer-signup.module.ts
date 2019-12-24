import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerSignupPageRoutingModule } from './customer-signup-routing.module';

import { CustomerSignupPage } from './customer-signup.page';
import { ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    CustomerSignupPageRoutingModule
  ],
  declarations: [CustomerSignupPage]
})
export class CustomerSignupPageModule {}
