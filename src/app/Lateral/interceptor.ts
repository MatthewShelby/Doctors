import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";




@Injectable({
      providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

      constructor(
            private cookieService: CookieService,
      ) {

      }




      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            //let myRequest: HttpRequest<any> = req;

            const cookieToken = this.cookieService.get("CU");
            console.log('cookieTOken is: ' + cookieToken);
            let myRequest = req.clone({
                  url: req.url,
                  headers: req.headers.append('Authorization', 'bearer ' + cookieToken)
            });
            if (cookieToken != '' && cookieToken != null && cookieToken !== "") {
                  console.log('****************');

                  myRequest.headers.append('Authorization', 'bearer ' + cookieToken);
                  console.log('myRequest is: ' + myRequest.headers.get('Authorization'));

            }

            return next.handle(myRequest);

      }

}