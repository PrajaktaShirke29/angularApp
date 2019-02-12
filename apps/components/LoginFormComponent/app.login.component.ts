import { Component, OnInit } from '@angular/core';
import { User, RegUser } from "./../../Model/app.user.model";
import { FormService } from "./../../services/app.form.service";
import {Response} from "@angular/http";
//import { userInfo } from 'os';

@Component({
    selector: 'app-login-component',
    templateUrl: './app.login.form.html'
})
export class LoginComponent implements OnInit {
    user: User;
    users:Array<User>;

    constructor(private fserv: FormService) {
        this.user=new User("","");
        this.users=new Array<User>();
        
     }

    ngOnInit(): void {
       
   
    }
    auth():void{
        
        
        console.log(JSON.stringify(this.user));
        this.fserv.postData(this.user).subscribe(
            (resp:Response)=>{
                this.users.push(resp.json().data);
                console.log(resp.json().data);
            },
            error =>{
                console.log(`Error occured ${error}`);
            }
        );

    }

    clear():void{
        this.user=new User(" ","");
     }
}
