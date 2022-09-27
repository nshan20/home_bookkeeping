import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryiesServis} from "../sheard/servisis/categoryies.servis";
import { Subscription} from "rxjs";

@Component({
  selector: 'app-histry-page',
  templateUrl: './histry-page.component.html',
  styleUrls: ['./histry-page.component.scss']
})
export class HistryPageComponent implements OnInit, OnDestroy {

  categories:any;

  graphic:any[] = [];
  cart:any[] = [];
  isLoaded = false;
  isEvent = false;

  syb?:Subscription;
  syb2?:Subscription;

  isFilterVituble:boolean = false;

  constructor(private categoryiesServis:CategoryiesServis) { }

  ngOnInit(): void {
    this.syb = this.categoryiesServis.getCategory()
      .subscribe((data:any)=>{
        this.categories = data;
        for (let i =0; i < data.length; i++){
          this.graphic.push({name: data[i].name, value: data[i].number});
        }
        this.isLoaded = true;
      })

    this.syb2 = this.categoryiesServis.getEvent()
      .subscribe((data:any)=>{
        for (let i =0; i < data.length; i++){
          this.cart.push(data[i]);
        }
        this.isEvent = true;
      })

  }

  private toogleIsFilterVituble(dir:boolean){
    this.isFilterVituble = dir;
  }

  openFilter(){
    this.toogleIsFilterVituble(true);
  }

  isFilterClose(){
    this.toogleIsFilterVituble(false);
  }

  onFilterApply(filterData:any){
    this.toogleIsFilterVituble(false);
    console.log(filterData);
  }

  ngOnDestroy() {
      if (this.syb){
        this.syb.unsubscribe();
      }
      if (this.syb2){
      this.syb2.unsubscribe();
      }
  }
}
