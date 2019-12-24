import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './phone-mask.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CnicMaskDirective } from './cnic-mask.directive';

@NgModule({
  declarations: [PhoneMaskDirective, CnicMaskDirective],
  exports: [PhoneMaskDirective, CnicMaskDirective],
  imports: [ReactiveFormsModule,FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
