import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  dropdown:string="categoryName";
  search:string = "";

  @Input() cart:any


  constructor() { }

  ngOnInit(): void {
    console.log(this.cart, "cccc");
  }


  changeCriteriy(field:string = 'categoryName'){
    this.dropdown = field;
  }

  onSearch(event:any){
    console.log(event);
  }

}
