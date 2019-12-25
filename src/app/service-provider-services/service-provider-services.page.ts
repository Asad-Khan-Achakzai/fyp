import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeprecatedCurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import {CustomerService} from '../../sdk/custom/customer.service';
@Component({
  selector: 'app-service-provider-services',
  templateUrl: './service-provider-services.page.html',
  styleUrls: ['./service-provider-services.page.scss'],
})
export class ServiceProviderServicesPage implements OnInit {
loading = false;
  Form: FormGroup;
  Departure: string;
  Destination: string;
  departureValue: string;
  destinationValue:string;
  routesCopy:[];
  from:string;

cities = ['quetta','peshawer'];
  constructor(private formBuilder: FormBuilder,private router :Router,private customerService: CustomerService) {
    this.Form = this.formBuilder.group({
      routes : [[

      ]]
    });
  }
  ngOnInit() {
  }
  // get departureValue(): string {
  //   return this.Form.value['departure'];
  // }
  // get destinationValue(): string {
  //   return this.Form.value['destination'];
  // }
  enterToTheList(){
    this.Form.value['routes'].push({Departure: this.departureValue , Destination : this.destinationValue});
    this.routesCopy = this.Form.controls['routes'].value;
  }
  delet(item)
  {
    //console.log("dlete Function");
    //console.log(item.destination);
  }
  nextButton(){
    console.log(this.Form.value);
    this.customerService.serviceProviderRegister(this.Form.value).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
   }
  }
