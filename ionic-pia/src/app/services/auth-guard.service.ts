import { Injectable } from '@angular/core';
import { AutenticacionFirebaseService } from './autenticacion-firebase.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  public isLoggedIn: boolean = false;
  currentuser: any;

  constructor(
    private auth: AutenticacionFirebaseService,
    private router: Router
    ){
      
  }
  
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> 
    {
      if(this.userIsLogged())
      {
        return true;
      }
      else
      {
        console.log("Acceso denegado!");
        this.router.navigate(['/login']);
        return false;
      }
  }

  userIsLogged(): boolean
  {
   return this.auth.isLoged;
  }
}
