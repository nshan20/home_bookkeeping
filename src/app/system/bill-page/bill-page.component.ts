import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, delay, Subscription} from "rxjs";

import {BillService} from "../sheard/servisis/bill.service";

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscribetion?: Subscription;
  subscribetion2?: Subscription;

  currensy!:any;
  bill!:any;
  isLoadet: boolean = false;

  constructor(private billService: BillService) { }

  ngOnInit(): void {

    this.subscribetion = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrensy()
    ).subscribe((dataRespons:any)=>{
      this.bill = dataRespons[0];
      this.currensy = dataRespons[1];
      // console.log(this.bill, this.currensy, "respons data");
      this.isLoadet = true;
      });

  }

  onRefresh(){
    this.isLoadet = false;
    this.subscribetion2 = this.billService.getCurrensy()
      .subscribe((currensy:any)=>{
        this.currensy = currensy;
        this.isLoadet = true;
      })
  }

  ngOnDestroy(){
    this.subscribetion?.unsubscribe();
    this.subscribetion2?.unsubscribe();
  }

}
