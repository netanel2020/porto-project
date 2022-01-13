import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class custominterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem("jwt");
    const addtoreq=req.clone({
        setHeaders:{
          Authorization:'Bearer '+localStorage.getItem("jwt")//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDYyNDU5NC1mMTY2LTRkOTYtYjMzZS1lNTdhYTE1ZDFlM2YiLCJ2YWxpZCI6IjEiLCJuYW1lIjoi15fXmdeZ150iLCJ1c2VyaWQiOiIxMDIzIiwiYnVza2V0SUQiOiIxMDIzIiwiYWRtaW4iOiIiLCJleHAiOjE2Mzc3NDc2MTQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.SMJAWUVdFLxtCiev_S6ZXUPvCvjrHAxCNag5vdAxxQY
        }
    })
        return next.handle(addtoreq);
    }

    
}