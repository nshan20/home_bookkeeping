import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {UsersServices} from "../../shard/services/users.services";
import {UserModals} from "../../shard/modals/user.modals";
import {MessageModule} from "../../shard/modals/message.module";
import {AuthServis} from "../../shard/services/auth.servis";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  message?: MessageModule;

  constructor(
    private usersServices:UsersServices,
    private authServis:AuthServis,
    private router: Router,
    private rout: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.message = new MessageModule("danger", "");

    this.rout.queryParams.subscribe((params:any)=>{
      console.log(params['accsesDenaid'], "||params['accsesDenaid']");
      if (params['newCanLogin']){
        this.showMassage({txt:"duq hajocutyamp registracia ek ancel", type:"success"});
      }else if (params['accsesDenaid']){
        this.showMassage({txt:"duq petke login ancnik", type:"success"});
      }
    })

    this.form = new FormGroup({
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  private showMassage(masage:any){
    this.message = masage;
    window.setTimeout(()=>{
      // @ts-ignore
      this.message.txt = "";
    },5000);
  }

  onSubmit(){
    const formData = this.form.value;

    this.usersServices.getUsersBymail(formData.email)
      .subscribe((user:UserModals)=>{
        if (user){
          if (user.password === formData.password){
            // @ts-ignore
            this.message.txt = "";
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authServis.login();
            this.router.navigate(['/system','bill']);
          }else {
            this.showMassage({txt:"parul@ chist che", type:"danger"});
          }
        }else {
          this.showMassage({txt:"etpisi mart chka", type:"danger"});
        }
      })
  }

}
