import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './../../Model/app.category.model';
 
@Component({
    selector: 'app-categoryInput-component',
    templateUrl: './app.categoryInput.view.html'
})
export class CategoryInputComponent implements OnInit {
    categories=Categories;
    categotyName:string;
    constructor() {
        this.categotyName = "";
     }
     selectCategory(c:any){
         this.categotyName = c.categoryName
     }
 
    ngOnInit() { }
}