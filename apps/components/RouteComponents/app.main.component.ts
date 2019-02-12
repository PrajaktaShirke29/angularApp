import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-component',
    template: `
    <table class="table table-bordered table-stripped">
    <tr>
        <td>
            <a [routerLink]="['home']">Home</a>
        </td>
        <td>
        <a [routerLink]="['about']">About</a>
        </td>
        <td>
        <a [routerLink]="['contact']">Contact</a>
        </td>
    </tr>
    </table>
    <hr/>
    <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
    id:number;
    constructor() {
        this.id=1000;
     }

    ngOnInit(): void { }
}
