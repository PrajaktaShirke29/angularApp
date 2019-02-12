import {Component} from  "@angular/core"

@Component({
    selector: "app-simple-component",
    template: `
            <h2> hello may first app!!!!.........</h2>
            <div class="container">{{message}}</div>
            
            <br>
            <div class="container">{{2+5}}</div>
            <br>
            <input type="text" class="form-control" [value]="name" />
            <br>
            <a [href]="url"> tutorialpoint</a>

            <br>
            <input type="button" class="btn btn-success" value="Click Me" (click)="print()">

            <div class="container"><b>{{msg}} </b></div>
            <br >
            <input type="text" class="form-control" [(ngModel)]="fullname"/><br/>
            <input type="text" class="form-control" [(ngModel)]="fullname"/><br/>
            <input type="text" class="form-control" [(ngModel)]="fullname"/><br/>

            <h2 class="container">Calculator</h2>
            <br>
            Number 1:<input type="text" class="form-control" [(ngModel)]="num1" id="num1"/>
            <br>
            Number 2:<input type="text" class="form-control" [(ngModel)]="num2" id="num2"/>
            <br> 
            <input type="button" class="btn btn-success" value="Add" (click)="add()">
            
            <input type="button" class="btn btn-success" value="Substract" (click)="sub()">
            
            <input type="button" class="btn btn-success" value="Divide" (click)="div()">
            
            <input type="button" class="btn btn-success" value="Multiple" (click)="mult()">

            <input type="text" class="form-control" [value]="res" />

            `

})
export class SimpleComponent{
    num1:number;
    num2:number;
    res:number;
    fullname:string;
    msg:string;
    message:string;
    name:string;
    url:string;
    constructor(){
        this.msg="Click button !!!!!!!!!!!!!!!!!!!!"
        this.message="hello angular 7";
        this.name="james Bond";
        this.url="http://www.tutorialpoint.com";
        this.res=0
    }
    print():void{
        this.msg="Hey Button is clicked!!!!!"
    }
    add():void{
        this.res= parseInt((<HTMLInputElement>document.getElementById("num1")).value) + parseInt((<HTMLInputElement>document.getElementById("num2")).value)
    }
    sub():number{
        this.res= parseInt((<HTMLInputElement>document.getElementById("num1")).value) - parseInt((<HTMLInputElement>document.getElementById("num2")).value)
        return this.res;
    }
    div():number{
        this.res= parseInt((<HTMLInputElement>document.getElementById("num1")).value) / parseInt((<HTMLInputElement>document.getElementById("num2")).value)
        return this.res;
    }
    mult():number{
        this.res= parseInt((<HTMLInputElement>document.getElementById("num1")).value) * parseInt((<HTMLInputElement>document.getElementById("num2")).value)
        return this.res;
    }
}

