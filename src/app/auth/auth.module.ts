import {NgModule} from "@angular/core";
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ShardModule} from "../shard/shard.module";


@NgModule({
  declarations:[
    LoginComponent,
    RegistrationComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ShardModule
  ]
})

export class AuthModule {

}
