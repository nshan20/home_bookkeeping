import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill:any;
  @Input() currensy:any;

  dolar?:number;
  euro?:number;
  manyArray:any=[];
  arryIcons: any = [
    {name: "RUB", value: 'currency_ruble'},
    {name: "EUR", value: 'euro_symbol'},
    {name: "USD", value: 'attach_money'},
  ];

  constructor() { }

  ngOnInit(): void {
    const rates = this.currensy.rates;
    this.dolar = rates['USD'] * this.bill.value;
    this.euro = rates['EUR'] * this.bill.value;

    this.manyArray.push(
      {sum:this.bill.value, name:'RUB'},
      {sum:this.dolar,name:'USD'},
      {sum:this.euro,name:'EUR'}
    );
  }

  iconTitle(titleSum: string){
    for (let i = 0; i< this.arryIcons.length; i++){
        if (titleSum === this.arryIcons[i].name){
          return this.arryIcons[i].value;
        }
    }
  }

}
