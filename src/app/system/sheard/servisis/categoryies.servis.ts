import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
// import {CategoryModule} from "../moduls-interfeis/category.module";
import {map, Observable} from "rxjs";

@Injectable()

export class CategoryiesServis {

  constructor(private http: HttpClient) {
  }

  addCategory(category: any): Observable<any>{
    return this.http.post(`http://localhost:3000/categories`,category)
      .pipe(
        map((data:any)=>{
          return data;
        })
      )
  }

  getCategory(){
    return this.http.get(`http://localhost:3000/categories`)
  }

  putCategory(id:number, data:object){
    return this.http.put(`http://localhost:3000/categories/${id}`, data)
  }

  postEvent( data:any){
    return this.http.post(`http://localhost:3000/event`, data);
  }

  getEvent(){
    return this.http.get(`http://localhost:3000/event`)
  }

}
