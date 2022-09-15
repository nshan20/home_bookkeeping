import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import { Subscription } from 'rxjs';
import {CategoryiesServis} from "../../sheard/servisis/categoryies.servis";

@Component({
  selector: 'app-app-event',
  templateUrl: './app-event.component.html',
  styleUrls: ['./app-event.component.scss']
})
export class AppEventComponent implements OnInit, OnDestroy {

  sub1!:any;
  sub2!:any;
  sub3!:any;

  capacityid:number = 1;
  capacityElement:any;

  labelPosition?: 'before' | 'after' ;
  checkbox:any=[
    {name: "доход", value:"expense", checked:false},
    {name: "расход", value:"income", checked:true},
  ]
  checkboxValue:string= "income";

  @Input() capacity: any[] = [];

  form: FormGroup = new FormGroup<any>({
    category: new FormControl(null, Validators.min(1)),
    descriptions: new FormControl(null, Validators.required),
  });

  constructor(private categoryiesServis:CategoryiesServis) { }

  ngOnInit(): void {
    this.onCategoryChange(this.capacityid);
  }

  activeCheckbox(e:string){
    this.checkboxValue = e;
  }

  onSubmit(form: FormGroup){
      // console.log(this.checkboxValue  ,form.value, "form.value", this.capacityElement , "this.capacityElement ");
      let sumCategory = form.value.category;
      
      if (this.checkboxValue === "income"){
        if (form.value.category > this.capacityElement.number){
            alert("no no");
          return
        }
        this.capacityElement.number = this.capacityElement.number - form.value.category;
        this.sub1 = this.categoryiesServis.putCategory(this.capacityElement.id, this.capacityElement )
          .subscribe((data)=>{
            //@ts-ignore
            this.capacityElement.number = data.number;
            this.addEvent({
              type: this.checkboxValue,
              amount: sumCategory,
              category: this.capacityElement.id,
              date: new Date(),
              "description": form.value.descriptions,
              categoryName: this.capacityElement.name
            });
          });
          
      }else if (this.checkboxValue === "expense"){
        this.capacityElement.number = this.capacityElement.number + form.value.category;
        this.sub2=this.categoryiesServis.putCategory(this.capacityElement.id, this.capacityElement )
          .subscribe((data)=>{
            //@ts-ignore
            this.capacityElement.number = data.number;

            this.addEvent({
              type: this.checkboxValue,
              amount: sumCategory,
              category: this.capacityElement.id,
              date: new Date(),
              description: form.value.descriptions,
              categoryName: this.capacityElement.name
            });
          });

          
      }
  }

  onCategoryChange(capacityid:number){
    for (let i = 0; i< this.capacity.length; i++){
      if (this.capacity[i].id === +capacityid){
        this.capacityElement = this.capacity[i];
      }
    }
  }

  addEvent(dats: any){
    this.sub3=this.categoryiesServis.postEvent(dats)
    .subscribe((data:any)=>{
        console.log(data, "data");
      })
  }

  ngOnDestroy() {
    if(this.sub1) this.sub1.unsubscribe;
    if(this.sub2) this.sub2.unsubscribe;
    if(this.sub3) this.sub3.unsubscribe;
  }

}
