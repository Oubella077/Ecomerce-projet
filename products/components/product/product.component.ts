import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() data:any={ };
@Output() addItem=new EventEmitter();
active:boolean=false;
amount:number=0;
constructor() { }

ngOnInit(): void {}

Add(){ 
  this.addItem.emit({item:this.data,quantity:this.amount});}}