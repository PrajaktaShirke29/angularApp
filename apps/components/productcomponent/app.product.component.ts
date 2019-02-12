import { Component, OnInit } from '@angular/core';
//import {FormControl} from '@angular/forms'
import {Product, Categories} from "./app.product.model";
import{ProductLogic}from "./app.product.logic";
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {ValidatorForElement} from "./app.custom.validator"

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'
})
export class ProductComponent implements OnInit {
    // the OnInit is component Lifecycle interface
    //this provide ngOnInit() method
    product:Product;
    private logic:ProductLogic;
    products:Array<Product>;

    //Categories locally

    categories=Categories;
    tableHeaders:Array<string>;
    frmProduct:FormGroup;
    constructor() {
        this.product=new Product(0,"","",0);
        this.logic=new ProductLogic();
        this.products=new Array<Product>();
        this.tableHeaders=new Array<string>();

        this.frmProduct=new FormGroup({
            ProductId: new FormControl(
                this.product.ProductId,
                Validators.compose([
                     Validators.required,
                    Validators.pattern("[0-9]+"),
                    Validators.maxLength(5)
                ]
                   
                )
            ),
            ProductName: new FormControl(
                this.product.ProductName,
            //     Validators.compose([
            //          Validators.required,
            //         Validators.pattern("[A-Z][A-Z a-z]*"),
            //         Validators.minLength(3),
            //         Validators.compose([ValidatorForElement.checkspace])
            //     ])
             ),

            CategoryName:new FormControl(
                this.product.CategoryName,
                Validators.required
            ),

            Price: new FormControl(
                this.product.Price,
                // Validators.compose([
                //     Validators.required,
                //     Validators.compose([ValidatorForElement.checkVal])
                // ])
            )

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
      //  this.product.CategoryName=this.logic.selectBox(this.product.CategoryName);
        this.products=this.logic.saveProducts(this.product);
        //alert(JSON.stringify(this.products))

    }

    delete():void{
        
        this.products=this.logic.deleteProducts(this.product);
    }

    update():void{
        this.products=this.logic.updateProducts(this.product);
        //alert(JSON.stringify(this.products))

    }
    getselectedrow(p: Product): void {
        // 1. Create a deep copy of the selected product
        // 2. assign that copy to this.product
        this.product = Object.assign({}, p);
      }
}
