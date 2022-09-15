import {Component, EventEmitter,OnDestroy, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryiesServis} from "../../sheard/servisis/categoryies.servis";
import {MessageModule} from "../../../shard/modals/message.module";


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  sub!:any;

  @Input() capacity:any;
  @Output() onCapacityEvent:EventEmitter<any> = new EventEmitter<any>();

  curentCategoryID:number = 1;
  curentCategory?: any;

  masage?:MessageModule;


  form:FormGroup = new FormGroup<any>( {
    name: new FormControl(null, Validators.required),
    number: new FormControl(null, Validators.min(1)),
  } );

  constructor(private categoryiesServis:CategoryiesServis) { }

  ngOnInit(): void {
    this.masage = new MessageModule('success', '');
    this.onCategoryChange();
  }

  onCategoryChange(){
    this.curentCategory = this.capacity
      .find( (c:any) => {
        return c.id === +this.curentCategoryID;
      });
  }

  onSubmit(){
    this.sub = this.categoryiesServis.putCategory(this.curentCategoryID, this.form.value)
      .subscribe((data:any)=>{
        for (let i = 0; i < this.capacity.length; i++){
          if (this.curentCategoryID == this.capacity[i].id) {
            this.capacity[i] = data;
            this.curentCategoryID = data.id;
            this.onCapacityEvent.emit(data);
            // @ts-ignore
            this.masage.txt = 'успешно редактирование';
            window.setTimeout(()=>{
              // @ts-ignore
              this.masage.txt = '';
            },5000);
          }
        }
      })
  }
  
  ngOnDestroy(){
    if(this.sub) this.sub.unsubscribe;
  }

}
