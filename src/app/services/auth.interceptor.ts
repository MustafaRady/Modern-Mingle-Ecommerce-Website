import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(
        private router :Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.url.includes('/checkout')){
            console.log('Check out request');
            const idToken = localStorage.getItem('idToken');
            if(idToken){
                const cloned = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + idToken)
                });
                return next.handle(cloned);
            }
            else{
                this.router.navigate(['/login']);
            }
        }else{
            return next.handle(req);
        }
    }
}