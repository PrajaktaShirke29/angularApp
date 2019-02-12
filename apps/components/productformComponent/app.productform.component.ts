import { Component, OnInit } from '@angular/core';
import {Product, Categories} from "./app.product.model";
import{ProductLogic}from "./app.product.logic";
import{ FormGroup, FormControl} from "@angular/forms"

@Component({
    selector: 'app-productform-component',
    templateUrl: './app.productform.view.html'
})
export class ProductComponentform implements OnInit {
    // the OnInit is component Lifecycle interface
    //this provide ngOnInit() method
    product:Product;
    private logic:ProductLogic;
    products:Array<Product>;
    isSaved:boolean;

    //Categories locally

    categories=Categories;
    tableHeaders:Array<string>;

    //Define FormGroup
    fromProduct:FormGroup;
    constructor() {
        this.product=new Product(0,"","",0);
        this.logic=new ProductLogic();
        this.products=new Array<Product>();
        this.tableHeaders=new Array<string>();
        this.isSaved=false;

        //Define an instance of FormGroup and map property of mode class
        this.fromProduct=new FormGroup({
            ProductId: new FormControl(this.product.ProductId),
            ProductName: new FormControl(this.product.ProductName),
            CategoryName: new FormControl(this.product.CategoryName),
            Price: new FormControl(this.product.Price)
        });
     }

    //the method will be invoked immediately after ctor

    ngOnInit(): void { 
        //read all properties of produdt class and push them in tableHeaders array
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        this.products=this.logic.getProducts();
        

    }

    clear():void{
        this.product=new Product(0,"","",0);
    }

    save():void{
        // read from values using "formControlName" under formGroup
        this.product=this.fromProduct.value;
        this.products=this.logic.saveProducts(this.product);
        //alert(JSON.stringify(this.products))
        this.isSaved=false;

    }
    loadForm():void{
        this.isSaved=true;
    }

    delete():void{
        
        this.products=this.logic.deleteProducts(this.product);
    }

    update():void{
        this.products=this.logic.updateProducts(this.product);
        //alert(JSON.stringify(this.products))

    }
    getselectedrow(p:Product):void{
        //1. create a deep copy of the selected procuct
        // 2. assign that copy to this.product

        this.product=Object.assign({},p);
    }
}
