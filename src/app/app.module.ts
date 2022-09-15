import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider'
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {AuthModule} from "./auth/auth.module";
import {UsersServices} from "./shard/services/users.services";
import {AuthServis} from "./shard/services/auth.servis";
import {AuthGuard} from "./shard/services/auth.guard";
import {NodeFaundComponent} from "./shard/components/node-faund/node-faund.component";
import {RouterModule} from "@angular/router";
import {Material} from "./material";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {NgxChartsModule} from "@swimlane/ngx-charts";




@NgModule({
  declarations: [
    AppComponent,
    NodeFaundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AuthModule,
    Material,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [UsersServices, AuthServis, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
