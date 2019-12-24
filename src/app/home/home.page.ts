import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

Form: FormGroup;
  constructor(private router :Router, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formInitializer();}
    formInitializer() {
      this.Form = this.formBuilder.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]],
        slectedGender: [null, [Validators.required]]
      });}

  signUp(){
    if(this.Form.value['slectedGender'] === "customer"){
    this.router.navigateByUrl('/customer-signup');}
    if(this.Form.value['slectedGender'] === "serviceProvider"){
      this.router.navigateByUrl('/service-provider-signup');}

  }
  public optionsFn(): void { //here item is an object 
    console.log(this.Form.value['slectedGender']);
  }
}
