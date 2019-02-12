import { RouterModule, Routes } from "@angular/router";
import {  ModuleWithProviders} from "@angular/core";
import { AboutComponent } from "./app.about.component";
import { HomeComponent } from "./app.home.component";
import { ContactComponent } from "./app.contact.component";
//import { ProductComponent } from "../productcomponent/app.product.component";
import { ProductServiceComponent } from "../productservicecomponent/app.productservice.component";
import { AppGuardService } from "../../services/app.test.gaurd.service";
import { ErrorComponent } from "./app.error.component";


// const routes: Routes=[
//     {path:"",component:HomeComponent},
//     {path:"about/:id", component:AboutComponent},
//     {path:"contact", component:ContactComponent,
//         children:[
//             {path:"product", 
//             component: ProductServiceComponent}
//         ]
//     }
// ];

const routes:Routes=[
    {path:"home", component:HomeComponent},
    {path:"about", component: AboutComponent},
    {
        path:"contact",
         component: ContactComponent,
         canActivate:[AppGuardService]
    },
    // {
    //     path:" ",
    //     redirectTo:"home",
    //     pathMatch:"full"
    // },
    {path:"error", component: ErrorComponent}
]

//register the routerTable for root of the current NG app
//when "routing is provided to "imports" of NGModule, this eill load RouterModule with route Table"
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);