import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import {  Router } from "@angular/router";
import {  RegisterComponent} from "./app.register.component";

@Component({
    selector: 'app-error',
    template: `
        <h2>Error Page</h2>
        <a [routerLink]="['register']">Register</a>
    <router-outlet></router-outlet>
    `
    
})
export class ErrorComponent implements OnInit {
    message: string;
    constructor(private router:Router) {
        this.message="This is the error Page"      

     }
     navigateToRegister():void{
        this.router.navigate(["Register"]);
        
    }

    ngOnInit(): void { }
}
