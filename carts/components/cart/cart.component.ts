import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../../services/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts:any[]=[];
  total:any;
  success:boolean=false;
  constructor( private service:CartserviceService) { }

  ngOnInit(): void {
   this.getproductscart();
  }

getproductscart(){
    if("cart" in localStorage){
     this.cartproducts=JSON.parse(localStorage.getItem("cart")!);
}
this.getTotal();
}
addquantity(index:number){
  this.cartproducts[index].quantity++
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  this.getTotal();
 }

minsquantity(index:number){
  this.cartproducts[index].quantity--
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  this.getTotal();
 }
getTotal(){
  this.total=0;
  for (let x in this.cartproducts){
  this.total+= this.cartproducts[x].quantity * this.cartproducts[x].item.price
}
 }

detectechange(){ 
  this.getTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
}
delete(index:number) { 
this.cartproducts.splice(index,1)
localStorage.setItem("cart",JSON.stringify(this.cartproducts));
this.getTotal();
}
clearcart(){ 
  this.cartproducts=[];
  localStorage.setItem("cart",JSON.stringify(this.cartproducts));
  this.getTotal();
  }
Addcart() { 
  let products=this.cartproducts.map(item=> {  return {productId: item.item.id, quantity: item.quantity} } )

let Model={
  userid:5,
  date:new Date(),
  products:products
}

this.service.newcart(Model).subscribe( res=>{ 
  this.success=true;
} )

  }

  sort() { 
    this.cartproducts.sort();
    localStorage.setItem("cart",JSON.stringify(this.cartproducts));
    this.getTotal();
    }
}