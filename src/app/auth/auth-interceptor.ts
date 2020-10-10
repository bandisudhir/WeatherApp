import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({
    providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            setParams: {
                APPID: environment.appId
            }
        });
        return next.handle(authReq);
    }
}
