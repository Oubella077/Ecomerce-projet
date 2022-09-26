import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
 host =environment.host;
  
  constructor(private http:HttpClient) { }

getAllproducts()  { 
   return this.http.get(this.host +'/products' )
 
   }

getAllcategories()  { 
    return this.http.get(this.host +'/products/categories')
    }
    
getproductsBycategories(keyword:string) { 
      return this.http.get(this.host +'/products/category/'+keyword);
      }

getproductbyID(id:any)  { 
        return this.http.get(this.host +'/products/'+ id)
        }

}
