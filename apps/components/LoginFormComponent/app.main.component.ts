import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-component',
    template: `
    <table class="table table-bordered table-stripped">
    <tr>
        <td>
            <a [routerLink]="['login']">login</a>
        </td>
        <td>
            <a [routerLink]="['register']">register</a>
        </td>
        </tr>
        </table>
        <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
  
    constructor() {
       
     }

    ngOnInit(): void { }
}
