import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeprecatedCurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-service-provider-services',
  templateUrl: './service-provider-services.page.html',
  styleUrls: ['./service-provider-services.page.scss'],
})
export class ServiceProviderServicesPage implements OnInit {

  form: FormGroup;
  Departure: string;
  Destination: string;
   routes =[];
  from:string;
cities = ['quetta','peshawer'];
  constructor(private formBuilder: FormBuilder,private router :Router) {
    this.form = this.formBuilder.group({
      departure: [],
      destination: []
    });
  }
  ngOnInit() {
  }
  get departureValue(): string {
    return this.form.value['departure'];
  }
  get destinationValue(): string {
    return this.form.value['destination'];
  }
  enterToTheList(){
    console.log(this.departureValue);
    this.routes.push({Departure: this.departureValue , Destination : this.destinationValue});
  //  dep : String;
  //  const dep = this.email;

  }
  delet(item)
  {
    console.log("dlete Function");
    console.log(item.destination);
  }
  nextButton(){
    //this.router.navigateByUrl('/service-provider-services');
  }
}
