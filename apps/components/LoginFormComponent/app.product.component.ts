import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {ValidatorForElement} from "../productcomponent/app.custom.validator"
import{Categories, Product} from "./../../Model/app.product.model";
import { ProductService } from './../../services/app.products.service';
import {Response} from "@angular/http";



@Component({
    selector: 'app-productservice-component',
    templateUrl: './app.product.view.html'
})
export class ProductCrudComponent implements OnInit {
    // the OnInit is component Lifecycle interface
    //this provide ngOnInit() method
    product:Product;
    products:Array<Product>;
    isSaved:boolean;

    //Categories locally
    categories=Categories;

    tableHeaders:Array<string>;
    searchTable: Array<string>;
    frmProduct:FormGroup;
    constructor(private serv:ProductService) {
        this.product=new Product("",0,"","","",0);
        this.products=new Array<Product>();
    
        this.tableHeaders=new Array<string>();
        this.isSaved=false;
        this.searchTable=new Array<string>();
        this.frmProduct=new FormGroup({
            ProductId: new FormControl(
                this.product.ProductId,
                // Validators.compose([
                //      Validators.required,
                //     Validators.pattern("[0-9]+"),
                //     Validators.maxLength(5)]
                // )
            ),
            
            ProductName: new FormControl(
                this.product.ProductName,
                // Validators.compose([
                //      Validators.required,
                //     Validators.pattern("[A-Z][A-Z a-z]*"),
                //     Validators.minLength(3)
                // //    Validators.compose([ValidatorForElement.checkspace])
                // ])
            ),
            
            CategoryName:new FormControl(
                this.product.Category,
                Validators.required
                ),

                Manufacturer:new FormControl(
                    this.product.Manufacturer),
                
                Price: new FormControl(
                    this.product.Price,
                   // Validators.compose([
                   //     Validators.required
                      //  Validators.compose([ValidatorForElement.checkVal])
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
                                    
                this.serv.getData().subscribe(
                    (resp:Response)=>{
                        this.products=resp.json().data;
                        console.log(resp.json().data);
        },
        error =>{
            console.log(`Error Occured ${error}`);
        }
        );
    }

    save():void{
        console.log(JSON.stringify(this.product));
        this.serv.postData(this.product).subscribe(
            (resp:Response)=>{
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error =>{
                console.log(`Error Occured ${error}`);
            }
        );
    }
    delete():void{
        console.log(JSON.stringify(this.product));
        this.serv.deleteData(this.product.ProductId).subscribe(
            (resp:Response)=>{
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error =>{
                console.log(`Error Occured ${error}`);
            }
        );
    }
    loadForm():void{
        this.isSaved=true;
    }
    update():void{
        this.serv.putData(this.product.ProductId, this.product).subscribe(
            (resp:Response)=>{
                this.products.push(resp.json().data);
                console.log(resp.json().data);
            },
            error =>{
                console.log(`Error Occured ${error}`);
            }
        );
    }
    search():void{
        
        this.serv.searchData(this.product.ProductName).subscribe(
            (resp:Response)=>{
                this.products.push(resp.json().data);
                console.log(resp.json().data);
                                
            },
            error =>{
                console.log(`Error Occured ${error}`);
            }
        );
    }

    clear():void{
            this.product=new Product("",0,"","","",0);
         }

     getselectedrow(p: Product): void {
            // 1. Create a deep copy of the selected product
            // 2. assign that copy to this.product
            this.product = Object.assign({}, p);
          }
}
    