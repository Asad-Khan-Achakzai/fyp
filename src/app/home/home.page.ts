import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from 'src/sdk/custom/customer.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

Form: FormGroup;
  constructor(private router :Router, private formBuilder: FormBuilder,private customerService: CustomerService,public alertController: AlertController) {}
  ngOnInit() {
    this.formInitializer();}
    formInitializer() {
      this.Form = this.formBuilder.group({
        email: [null, [Validators.required]],
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
  loginButton(){
    const loginData = this.Form.value;
     if(this.Form.value['slectedGender'] === "customer"){
    
      console.log('loginData', loginData);
    this.customerService.customerLogin(loginData).subscribe(
      data => {
        console.log('got response from server', data);
       this.router.navigateByUrl('/customer-profile');
      },
       async error => {
       // this.loading = false;
       const alert = await this.alertController.create({
        header: 'Alert',
        //subHeader: 'Subtitle',
        message: error.error.message,
        buttons: ['OK']
      });
        alert.present();
        //this.books.addBook(this.nameText, this.authorText);
      
        console.log('error', error.error.message);
      } );}
      else{
        console.log('loginData', loginData);
        this.customerService.serviceProviderLogin(loginData).subscribe(
          data => {
            console.log('got response from server', data);
           this.router.navigateByUrl('/serviceprovider-profile');
          },
          async error => {
           // this.loading = false;
           
           const alert = await this.alertController.create({
            header: 'Alert',
            //subHeader: 'Subtitle',
            message: error.error.message,
            buttons: ['OK']
          });
            alert.present();


           
          } );
      }
     }
    
  }
