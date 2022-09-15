import { Component, OnInit } from '@angular/core';
import {CategoryiesServis} from "../sheard/servisis/categoryies.servis";

@Component({
  selector: 'app-planning-page',
  templateUrl: './planning-page.component.html',
  styleUrls: ['./planning-page.component.scss']
})
export class PlanningPageComponent implements OnInit {

  animation:boolean = true;
  animation2:boolean = true;

  events:any = [];
  categories = [];
  rezult:any[] = [];
  totalBalance = 0;

  constructor( private categoryiesServis:CategoryiesServis) { }



  ngOnInit(): void {
    this.categoryServer();
  }

  categoryServer(){
    this.categoryiesServis.getCategory()
      .subscribe((data: any) => {
        this.categories = data;
        this.animation = false;
      })

    this.categoryiesServis.getEvent()
      .subscribe((data: any) => {
        this.eventIncome(data);
        this.animation2 = false;
      })
  }


  eventIncome(data: any) {

    for (let j = 0; j < this.categories.length; j++){
      this.events[j] = {
        amount: 0,
        sum: this.categories[j]['number'],
        name: this.categories[j]['name'],
        pratcent:0,
        colors:""
      };
    }

    let dataCategory = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === "income") {
        dataCategory.push(data[i]);
      }
    }

    for (let i = 0 ; i < dataCategory.length; i++ ){
      for (let j = 0; j < this.categories.length; j++){
        if (dataCategory[i].category === this.categories[j]['id']){
          this.events[j].amount += dataCategory[i].amount;
        }
      }
    }

    this.testEvent(this.events);
  }

  testEvent(events: any){
    for (let i = 0; i< events.length; i++){
      let result = events[i].amount / events[i].sum  * 100;
      events[i].pratcent = result.toFixed();

      if (result <= 20) {
        events[i].colors = "bg-success";
      } else if (result <= 40) {
        events[i].colors = "bg-success";
      } else if (result <= 60) {
        events[i].colors = "bg-info";
      } else if (result <= 80) {
        events[i].colors = "bg-warning";
      } else{
        events[i].colors = "bg-danger";
      }
      result = 0;
      this.totalBalance += events[i].sum;
    }

    this.rezult?.push(...events);
    console.log(this.rezult, "rezult");

    if ( this.totalBalance === 0){
      this.categoryServer();
    }

  }



}
