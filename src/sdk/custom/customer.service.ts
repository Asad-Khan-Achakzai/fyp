import { Injectable } from '@angular/core';
import {customerRegistration} from '../customers.config';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  serviceProvider: any;
  constructor(private http: HttpClient) { }
  public userRegister(credentials: object): Observable<any> {
    const url = customerRegistration.getPath() + '/users/register';

    return this.http.post(url, credentials);
  }
  public serviceProviderRegister(credentials: object): Observable<any> {
    const url = customerRegistration.getPath() + '/providers/serviceProviderRegistration';
   //credentials = credentials + this.serviceProvider;
   this.serviceProvider['routes'] = credentials;
    return this.http.post(url, this.serviceProvider);
  }
   public provideServices(credentials: object){
     this.serviceProvider = credentials;
     console.log(this.serviceProvider);
   }
}
