import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-currensy-card',
  templateUrl: './currensy-card.component.html',
  styleUrls: ['./currensy-card.component.scss']
})
export class CurrensyCardComponent implements OnInit {

  @Input() bill:any;
  @Input() currensy:any;

  dataAtty:[{keys:string, value:number, data: any}] = [ {keys: "RUB", value: 1 , data: new Date()} ];

  constructor() { }

  ngOnInit(): void {
    this.dataPars(this.currensy.rates, this.dataAtty);
  }

  dataPars(currensy:object, dataAtty:any){
    let key = Object.keys(currensy);
    for (let i = 0; i < key.length; i++){
      // @ts-ignore
      dataAtty.push({keys: key[i], value: currensy[key[i]] , data: new Date()});
    }
    console.log(dataAtty);
  }


}
