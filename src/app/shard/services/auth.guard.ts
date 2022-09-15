import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServis} from "./auth.servis";
import {Injectable} from "@angular/core";

@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(private autServis: AuthServis, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user = JSON.parse(<string>localStorage.getItem("user"));

    if (user){
      return true;
    }

   if (this.autServis.isLogetIn()){
     return true
   }else {
     this.router.navigate(['/Login'], {
       queryParams: {
         accsesDenaid: true
       }
     });
     return false;
   }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return this.canActivate(childRoute, state);
  }
}
