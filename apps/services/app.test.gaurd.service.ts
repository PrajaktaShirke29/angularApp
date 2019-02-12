import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
//import { Injectable } from "@angular/core";

import { Injectable } from '@angular/core';
//import { CanActivate } from "@angular/router/src/utils/preactivation";

@Injectable()
export class AppGuardService implements CanActivate{
    constructor(private _router:Router){}
        canActivate(
            route: ActivatedRouteSnapshot,
            state:RouterStateSnapshot
        ):boolean{
            console.log("canActivate");
            //return true
            //remove comment to return true
            alert("You are not allowed to view this page. You are redirected to Error Page");
            this._router.navigate(["error"]);
            return false;
        }
    }
