import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { observable } from 'rxjs';
import { product } from '../../model/product';
import { ProductsService } from '../../services/products.service';
declare function getToday(): any;
declare function greetings(name: any): any;
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
 products:product[]=[];
 categories:string[]=[];
 cartproducts:any[]=[];
 spin:boolean=false;
 constructor(private service:ProductsService) { }

  ngOnInit(): void {
    // call the externaljs functions
   
    this.getproducts();
    this.getcategories(); 
    getToday(); // without param
    greetings('rohol'); // with param
}

 getproducts(){ 
  this.spin=true; 
  this.service.getAllproducts().subscribe(
  (data:any)=>{ 
    this.products=data;
    this.spin=false;
  },
  (err)=>{console.log(err.message)
  this.spin=false; }
  )
}

getcategories(){

  this.service.getAllcategories().subscribe(
   (data:any)=>{ 
    this.categories=data;
    console.log(data)
   },
   (err)=>{console.log(err.message) }
  )
 }
 filtercategorie(event:any){ 
 let value=event.target.value;
 if(value=="ALL")
 this.getproducts();
 else
  this.getproductcategories(value);
 }

  getproductcategories(keyword: string){
    this.spin=true;
  this.service.getproductsBycategories(keyword).subscribe(
   (data:any )=>{ 
    this.products=data;
    this.spin=false;
   },
   (err)=>{console.log(err.message) 
    this.spin=false;})
 }
addtocart(event:any){
 if("cart" in localStorage){
  this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
  let exist =this.cartproducts.find(item=>item.item.id==event.item.id)
  if(exist)
    alert("This product exist Already in your cart")
  else{ 
    this.cartproducts.push(event);
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  }
}
else{
  this.cartproducts.push(event);
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
}
}

}
