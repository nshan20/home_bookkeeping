import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {CategoryiesServis} from "../../sheard/servisis/categoryies.servis";
import {CategoryModule} from "../../sheard/moduls-interfeis/category.module";

@Component({
  selector: 'app-app-category',
  templateUrl: './app-category.component.html',
  styleUrls: ['./app-category.component.scss']
})
export class AppCategoryComponent implements OnInit, OnDestroy {

  sub!:any;

  @Output() onCapacityEvent: EventEmitter<any> = new EventEmitter<CategoryModule>();

  constructor(private categoryiesServis: CategoryiesServis) { }

  ngOnInit(): void {
  }

  myForm : FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "capacity": new FormControl("1",Validators.min(1))
  });


  onSubmit(){
    let {userName , capacity} = this.myForm.value;
    if (capacity < 0) capacity *= -1;
    this.sub = this.categoryiesServis.addCategory({name:userName, number: capacity})
      .subscribe((capacity:any)=>{
        this.myForm.reset();
        this.myForm.patchValue({capacity: 1});
        this.onCapacityEvent.emit( capacity );
      })
  }

  ngOnDestroy() {
    if(this.sub) this.sub.unsubscribe;
  }

}
