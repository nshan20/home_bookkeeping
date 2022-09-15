 export class AuthServis {

   private isAuticated = false;

   login(){
      this.isAuticated = true;
   }

   logout(){
     this.isAuticated = false;
     window.localStorage.clear();
   }

   isLogetIn():boolean{
     return  this.isAuticated
   }

 }
