import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomerService} from '../../sdk/custom/customer.service';

@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.page.html',
  styleUrls: ['./service-provider-signup.page.scss'],
})
export class ServiceProviderSignupPage implements OnInit {
  Form: FormGroup;
  loading = false;
  constructor( private formBuilder: FormBuilder,private router :Router,private customerService: CustomerService) { }
  cities = ['quetta','peshawer'];
  ngOnInit() {
    this.formInitializer();}
    formInitializer() {
      this.Form = this.formBuilder.group({
        username: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        cnic: [null, [Validators.required,Validators.minLength(15)]],
        companyName: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        officeLocation: [null, [Validators.required]],
        email: [null, [Validators.required,Validators.email]],
        password: [null, [Validators.required]],
        phone: [null, [Validators.required,Validators.minLength(12)]],
       // confirmPassword: [null, [Validators.required]]
        tags: [[]],
     
      });
  }
  upload(form) {
    console.log(this.Form.value);
  }
  tagArrayToString(tagArray: string[]): string {
    if (Array.isArray(tagArray) && tagArray.length > 0) {
      const tags = tagArray.map((e: any) => `[${e.value}]`);
      const tagString = tags.join();
      return tagString;
    } else {
      return '';
    }
  }
  nextButton(){
    
    // this.customerService.serviceProviderRegister(this.Form.value).subscribe(
    //   data => {
    //     console.log('got response from server', data);
    //     this.loading = false;
    //   },
    //   error => {
    //     this.loading = false;
    //     console.log('error', error);
    //   }
    // );
   this.customerService.provideServices(this.Form.value);
    this.router.navigateByUrl('/service-provider-services');
  }
}
