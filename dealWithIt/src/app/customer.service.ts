import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.dev';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  addCustomer(customer: Customer) {
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.ADD_CUSTOMER;
    return this.httpClient.post(url, customer);
  }

  getCustomer(id: string) {
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER + '/' + id;
    return this.httpClient.get(url);
  }

  getAndroidPhones() {
    let url = environment.PHONE_BASE_URL + environment.PHONE.GET_ANDROID_PHONE;
    return this.httpClient.get(url);
  }

  getIosPhones() {
    let url = environment.PHONE_BASE_URL + environment.PHONE.GET_IOS_PHONE;
    return this.httpClient.get(url);
  }
}
