import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Server } from "./Server";





@Injectable({ providedIn: 'root' })

export class Guard implements CanActivate { 
      constructor(private server: Server, private router: Router) { }


      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
            if (!this.server.checkUserAuth()) {
                  this.router.navigate(['login']);
            }
            return true;
      }
}




      


// @Injectable({
//       providedIn: 'root'
// })
// export class Guard implements CanActivate {


//       constructor(
//             private server: Server,
//             private router: Router
//       ) { }

//       canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//             return this.server.checkUserAuth().subscribe(res => {
//                   if (res) {
//                         return true;
//                   } else {
//                         this.router.navigate(['login'])
//                   }
//                   return false;
//             });
//       }


//       canActivat2e(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//             let res: boolean = this.server.isLoggedIn.getValue();

//             if (res) {
//                   return true;
//             } else {
//                   this.router.navigate(['signin'])
//             }
//             return false;
//       };
// }

