import { RegUser, User } from "./../../Model/app.user.model";
import { Routes,RouterModule, Router } from "@angular/router";
import {  LoginComponent} from "./app.login.component";
import {  RegisterComponent} from "./app.register.component";
import {  ModuleWithProviders} from "@angular/core";
import { ErrorComponent } from "./app.error.component";
import { ProductCrudComponent } from "./app.product.component";



const routes: Routes=[
   // {path:"",component:LoginComponent},
    {path:"login", component:LoginComponent,pathMatch:"full"},
     {path:"register", component:RegisterComponent},
    {
        path:" ",
        redirectTo:"register",
        pathMatch:"full"
    },
    {path:"product", component:ProductCrudComponent},
    {path:"error", component: ErrorComponent,
             children:[
            {path:"register", 
            component: RegisterComponent}
        ]
  }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);