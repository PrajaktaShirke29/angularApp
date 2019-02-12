import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-about-component',
    template: `
    <h2> About Component</h2>
    <div class="container">{{message}}</div>
    <br/>
    <div class="container">The value is:{{value}}</div>
    <br/>
    <input type="button" value="Navigate to contact" (click)="navigateToContact()">`
})
export class AboutComponent implements OnInit {
    message:string;
    value:number;
    // injection of Router and ActivatedRoute will fetch Router object from RouterMoudle in NgModule using "routing"
    constructor(private router:Router, private act: ActivatedRoute) { 
        this.message="I am about Component"
    }
    //explicitly routed to contacts
    navigateToContact():void{
        this.router.navigate(["contact"]);
        
    }
    // Subscribe to parameters from ActivatedRoute Onject
    ngOnInit(): void { 
        this.act.params.subscribe((params)=>{
            this.value=params.id;
        });
    }
}
