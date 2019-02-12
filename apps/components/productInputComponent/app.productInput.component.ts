import { Component, OnInit,Input } from '@angular/core';
import {Product,Products} from './../../Model/app.product1.model'; 
@Component({
    selector: 'app-productInput-component',
    templateUrl: './app.productInput.view.html'
})
export class ProductInputComponent implements OnInit {
    products = Products
    _filterProduct:Array< Product >;
    _categoryName:string;
     
  @Input()
  set categoryName(cname: string) {
    this._categoryName = (cname && cname.trim()) || 'No Category Selected';
  }
  get categoryName() { 
      return this._categoryName; 
  }    
 
    constructor() { 
         this._filterProduct = new Array< Product >();
         console.log('Product');
    } 
 
  get filterProducts() { 
           this._filterProduct = new Array< Product >();
          for(let e of Products){
            if(e.categoryName==this._categoryName){
                this._filterProduct.push(e);
            }
        } 
      return this._filterProduct; 
    }
 
    ngOnInit() { }
}