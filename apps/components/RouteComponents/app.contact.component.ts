import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-component',
    template: `
    <h2> Contact Componet</h2>
    <div class="container">{{message}}</div>
    <br/>
    <a [routerLink]="['product']">Product</a>
    <router-outlet></router-outlet>`
})
export class ContactComponent implements OnInit {
    message:string;
    constructor() { 
        this.message="I am Contact Component"
    }

    ngOnInit(): void { }
}
