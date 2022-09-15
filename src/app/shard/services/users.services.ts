import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {UserModals} from "../modals/user.modals";

@Injectable()
export class UsersServices {

  constructor(private http: HttpClient) {  }

  getUsersBymail(email:string): Observable<any | undefined>{
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(
        map((respons:any)=>{
          return respons;
        }),
        map((user:UserModals)=>{
          // @ts-ignore
          if (user[0]){
            // @ts-ignore
            return user[0];
          }
            return undefined;
        } )

      )
  }

  createNewUsers(user:any):Observable<any>{
    return this.http.post(`http://localhost:3000/users`,user)
      .pipe(
        map((user:any)=> {
          return user
        })
      )
  }

}
