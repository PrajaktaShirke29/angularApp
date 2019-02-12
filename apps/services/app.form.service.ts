import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import { User } from "./../Model/app.user.model";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";
@Injectable()
export class FormService{
    url:String;
    constructor(private http: Http,private router:Router){
        this.url="http://localhost:4080";
        
    }
    getData():Observable<Response>{
        let resp:Observable<Response>;
        resp=this.http.get(`${this.url}/api/products`);
        return resp;
    }
    
    postData(prd:User):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers=new Headers({"Content-Type":"application/json"});
        //header.append("AUTHORIZATION","Basic UserName:Password");
        //2. define request option for header
        //collection of header values
        let options: RequestOptions=new RequestOptions();
        options.headers=header;
        let temp;
        let router=Router;
        // resp=this.http.post(`${this.url}/api/users/auth`,JSON.stringify(prd), options);
        this.http.post(`${this.url}/api/users/auth`,JSON.stringify(prd), options).pipe(map(data => {
            console.log("data", data.json());
            temp = data.json();
            console.log("final", temp.token);
            if (temp.token) {
                sessionStorage.setItem("authorization", `bearer ${temp.token}`);

                this.router.navigate(['product']);
            } else {

                this.router.navigate(['error']);
            }
           
        })).subscribe();
        return resp;
    }
    
    putData(id:number, prd: User):Observable<Response>{
        let resp:Observable<Response>;
        // 1. define request header
        let header:Headers=new Headers({"Content-Type":"application/json"});
        //header.append("AUTHORIZATION","Basic UserName:Password");
        //2. define request option for header
        //collection of header values
        let options: RequestOptions=new RequestOptions();
        options.headers=header;
        resp=this.http.put(`${this.url}/api/products/${id}`,JSON.stringify(prd), options);
        return resp;
    }
    deleteData(id:number):Observable<Response>{
        let resp:Observable<Response>;
        resp=this.http.delete(`${this.url}/api/products/${id}`);
        return resp;
    }
    searchData(name:string):Observable<Response>{
        let resp:Observable<Response>;
        resp=this.http.get(`${this.url}/api/products/${name}`);
        return resp;
    }

    

    
}