import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceproviderProfilePageRoutingModule } from './serviceprovider-profile-routing.module';

import { ServiceproviderProfilePage } from './serviceprovider-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceproviderProfilePageRoutingModule
  ],
  declarations: [ServiceproviderProfilePage]
})
export class ServiceproviderProfilePageModule {}
