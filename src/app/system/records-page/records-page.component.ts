import { Component, OnInit } from '@angular/core';
import {CategoryiesServis} from "../sheard/servisis/categoryies.servis";

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  capacity:any[] = [];
  isLoding:boolean = false;

  constructor(private categoryiesServis:CategoryiesServis) { }

  ngOnInit(): void {
    this.categoryiesServis.getCategory()
      .subscribe((capacity:any)=>{
        this.capacity = capacity;
        this.isLoding = true;
      })
  }

  newCapacityEvent(capacity: any){
    this.capacity.push(capacity);
  }

  editData(category:any){
    const idx = this.capacity
      .find((c:any)=> c.id === category.id);
    this.capacity[idx] = category;
  }

}
