//1. Angular module file
import {NgModule} from "@angular/core"

//1.   import all standard modules
import {BrowserModule} from "@angular/platform-browser"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic"
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { HttpModule} from "@angular/http";


//2. import all components and directives
import {SimpleComponent} from "./components/simplecomponent/app.simple.component"
//import {ProductComponentform} from "./components/productformComponent/app.productform.component"
import {ProductComponent} from "./components/productcomponent/app.product.component"
import {CategoryInputComponent} from "./components/categoryInputComponent/app.categoryInput.component"
import {ProductInputComponent} from "./components/productInputComponent/app.productInput.component"
import {ProductServiceComponent} from "./components/productservicecomponent/app.productservice.component"
// 3. import all servicess
import{SampleService} from "./services/app.sample.service"
import {ProductService} from "./services/app.products.service"
import { SampleServiceComponent } from "./components/sampleservicecomponent/app.sampleservice.component";
//import { ProductServiceComponent } from "./components/productservicecomponent/app.productservice.component";
import { CommunicationService } from "./services/app.communication.service";
import{ AboutComponent} from "./components/RouteComponents/app.about.component";
import {  ContactComponent} from "./components/RouteComponents/app.contact.component";
import { HomeComponent } from "./components/RouteComponents/app.home.component";
import { routing } from "./components/LoginFormComponent/app.formroute.table";
import { MainComponent  } from "./components/LoginFormComponent/app.main.component";
import { from } from "rxjs";
//import { ErrorComponent } from "./components/RouteComponents/app.error.component";
import { AppGuardService } from "./services/app.test.gaurd.service";
import { LoginComponent } from "./components/LoginFormComponent/app.login.component";
import {RegisterComponent  } from "./components/LoginFormComponent/app.register.component";
import { FormService } from "./services/app.form.service";
import { ErrorComponent } from "./components/LoginFormComponent/app.error.component";
import { ProductCrudComponent } from "./components/LoginFormComponent/app.product.component";
//import { CategorySenderComponent } from "./components/pscomponent/app.categorysender.component";
//import { ProductReceiverComponent  } from "./components/pscomponent/app.productreceiver.component";
@NgModule({
    imports:[BrowserModule, FormsModule, ReactiveFormsModule,routing, HttpModule],
    declarations:[SimpleComponent, ProductComponent, SampleServiceComponent,
    ProductServiceComponent, CategoryInputComponent, ProductInputComponent,HomeComponent,ErrorComponent,
    ContactComponent, AboutComponent,MainComponent,RegisterComponent,LoginComponent,ProductCrudComponent ],
    providers:[SampleService,ProductService,CommunicationService,AppGuardService,FormService ],
    bootstrap:[MainComponent]
})
export class AppModule{}

//4. Making AppModule as bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);