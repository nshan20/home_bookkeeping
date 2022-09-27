import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-history-filther',
  templateUrl: './history-filther.component.html',
  styleUrls: ['./history-filther.component.scss']
})
export class HistoryFiltherComponent implements OnInit {

  @Output() isFilterClose = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();

  @Input() categories: any = [];

  selectedPereud:string = "d";
  selectedType:[] = [];
  selectedCategoris:[] = [];

  timePiriuds:any = [
    {type: 'd', label: "day"},
    {type: 'w', label: "month"},
    {type: 'M', label: "year"}
  ];

  typs:any = [
    {type:'income', id:'flexCheckDefault1'},
    {type:'expense', id:'flexCheckDefault2'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clos(){
    this.selectedPereud = "d";
    this.selectedType = [];
    this.selectedCategoris = [];
    this.isFilterClose.emit();
  }

  private calculetImputParams(field:string ,checked:boolean ,value:string){
    if (checked){
      // @ts-ignore
      this[field].indexOf(value) === -1 ? this[field].push(value) : null;
    }else {
      //@ts-ignore
      for (let i = 0; i < this[field].length; i++){
        //@ts-ignore
        if (this[field][i] === value){
          //@ts-ignore
          this[field].splice(i, 1);
        }
      }
    }
  }

  hendelChangeType({checked ,value}:any){
    this.calculetImputParams("selectedType",checked, value );
  }

  hendelChangeCategories({checked ,value}:any){
    this.calculetImputParams("selectedCategoris",checked, value );
  }

  applayFilter(){
    this.onFilterApply.emit({
      types: this.selectedType,
      categories: this.selectedCategoris,
      period: this.selectedPereud
    })
  }

}
