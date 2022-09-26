import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(private http:HttpClient) { }
  
newcart(model:any)  { 
  let host =environment.host;
    return this.http.post(host +'/carts',model)
    }  
}
