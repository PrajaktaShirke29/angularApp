import { Component, OnInit } from '@angular/core';
import { RegUser} from "./../../Model/app.user.model";

@Component({
    selector: 'app-register-component',
    templateUrl: './app.register.form.html'
})
export class RegisterComponent implements OnInit {
    user: RegUser;
    users:Array<string>;
    constructor() {
        this.user=new RegUser("","","");
        this.users=new Array<string>();
     }

    ngOnInit(): void { }
    clear():void{
        this.user=new RegUser("","", "");
     }
}
