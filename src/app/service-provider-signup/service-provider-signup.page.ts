import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-provider-signup',
  templateUrl: './service-provider-signup.page.html',
  styleUrls: ['./service-provider-signup.page.scss'],
})
export class ServiceProviderSignupPage implements OnInit {
  Form: FormGroup;
  constructor( private formBuilder: FormBuilder,private router :Router) { }
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
        confirmPassword: [null, [Validators.required]],
        code: [],
        tags: [[]],
        serviceFrom: [],
        serviceDestination: []
      });
  }
  upload(form) {
    console.log(form.tags);
    form.tags = this.tagArrayToString(form.tags);
    console.log(form.tags);
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
    this.router.navigateByUrl('/service-provider-services');
  }
}
