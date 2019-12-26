import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/sdk/custom/customer.service';

@Component({
  selector: 'app-serviceprovider-profile',
  templateUrl: './serviceprovider-profile.page.html',
  styleUrls: ['./serviceprovider-profile.page.scss'],
})
export class ServiceproviderProfilePage implements OnInit {
  serviceProviderInfo:serviceProvider;
  email:string;
  userName: string;
  phone: string;
  cnic:string;
  tags = [];
  routes = [];
  constructor(private router :Router,private customerService: CustomerService) { }

  ngOnInit() {
    this.getServiceProvider();
  }
  back(){
    this.router.navigateByUrl('/home');
  }
  async  getServiceProvider(){
    const observable = await this.customerService.getServiceProvider();
    observable.subscribe(
      data => {
        this.serviceProviderInfo = data.data;
        this.email = this.serviceProviderInfo.email;
        this.userName = this.serviceProviderInfo.username;
        this.phone = this.serviceProviderInfo.phone;
        this.cnic = this.serviceProviderInfo.cnic;
        this.tags = this.serviceProviderInfo.tags;
        this.routes = this.serviceProviderInfo.routes;
        console.log('tags array',this.routes);
        
        console.log('data', data.data);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
interface serviceProvider {
  username: string;
  email: string;
  password: string;
  is_deleted: boolean;
  phone: string;
  cnic: string;
  tags: string[];
  routes: string[];
}