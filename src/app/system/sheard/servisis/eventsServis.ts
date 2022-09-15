import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()

export class eventsServis {
  constructor(private http:HttpClient) {
  }

  getEventId(id:string){
    return this.http.get(`http://localhost:3000/event/${id}`);
  }


}
