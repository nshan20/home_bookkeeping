import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {eventsServis} from "../../sheard/servisis/eventsServis";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {
  data:any;
  Loading:boolean = false;
  s1?:Subscription;
  s2?:Subscription;

  constructor(
    private rout: ActivatedRoute,
    private events:eventsServis) {  }

  ngOnInit(): void {
    this.s1 = this.rout.params.subscribe(
      (data:any)=>{
        this.s2 = this.events.getEventId(data.id)
          .subscribe(
            (datas:any)=>{
              this.data = datas;
              console.log(this.data);
              this.Loading = true;
            }
          )
      }
    )
  }

  ngOnDestroy() {
    if (this.s1){
      this.s1.unsubscribe();
    }
    if (this.s2){
      this.s2.unsubscribe();
    }
  }

  // @ts-ignore
  onColor(color:string){
    if (color === "income"){
      return 'alert alert-primary'
    }else if (color === "expense"){
      return 'alert alert-danger'
    }
  }


}
