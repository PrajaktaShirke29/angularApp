import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
    selector: 'app-error',
    template: `
        <h2>Error Page</h2>
    `,
    
})
export class ErrorComponent implements OnInit {
    message: string;
    constructor() {
        this.message="THis is the error Page"      

     }

    ngOnInit(): void { }
}
