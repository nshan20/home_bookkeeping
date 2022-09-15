import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {ModulInterfeis} from "../moduls-interfeis/modul-interfeis";

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {  }

  getBill():Observable<ModulInterfeis>{
    return this.http.get(`http://localhost:3000/bill`)
      .pipe(
        map((respons:any)=>{
          return respons;
        })
      )
  }

  getCurrensy(bill:string = ""):Observable<any>{
    return this.http.get(`http://localhost:3000/base?${bill}`)
      .pipe(
        // delay(2000),
        map((data:any)=>{
          return data;
        })
      )
  }



}
