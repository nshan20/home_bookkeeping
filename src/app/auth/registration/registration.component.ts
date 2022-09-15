import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersServices} from "../../shard/services/users.services";
import {UserModals} from "../../shard/modals/user.modals";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form?: FormGroup;

  constructor(
    private usersServices: UsersServices,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      // @ts-ignore
      email: new FormControl(null, [Validators.required, Validators.email], this.farbitonEmails.bind(this)),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue]),
    })
  }

  farbitonEmails(control: FormControl): any | null{
    console.log(control, "nshan@mail.com");
    return new Promise((resolve)=>{
      this.usersServices.getUsersBymail(control.value)
        .subscribe((user:UserModals)=>{
          if (user){
            resolve({forbeddenEmail:true});
          }else {
            resolve(null);
          }
        })
      return null
    })
  }

  onSbmit(){
    const {email, password, name} = this.form?.value
    const user = new UserModals(email, password, name);

    this.usersServices.createNewUsers(user)
      .subscribe((user:UserModals)=>{
        this.router.navigate(['/Login'],{
          queryParams:{
            newCanLogin: true
          }
        })
      })
  }

}
