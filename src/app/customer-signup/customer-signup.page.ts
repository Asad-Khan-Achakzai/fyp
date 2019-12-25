import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {CustomerService} from '../../sdk/custom/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.page.html',
  styleUrls: ['./customer-signup.page.scss'],
})
export class CustomerSignupPage implements OnInit {
  Form: FormGroup;
  loading = false;
  constructor( private formBuilder: FormBuilder,private customerService: CustomerService) { }

  ngOnInit() {
    this.formInitializer();}
    formInitializer() {
      this.Form = this.formBuilder.group({
        username: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        cnic: [null, [Validators.required,Validators.maxLength(13),Validators.minLength(13)]],
        email: [null, [Validators.required,Validators.email]],
        password: [null, [Validators.required]],
        phone: [null, [Validators.required,Validators.minLength(12)]],
        //confirmPassword: [null, [Validators.required]],
      });
  }
  signUpButton(){
    //this.loading = true;

    this.customerService.userRegister(this.Form.value).subscribe(
      data => {
        console.log('got response from server', data);
        this.loading = false;
       // this.router.navigateByUrl('/home');
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );
  }
}
