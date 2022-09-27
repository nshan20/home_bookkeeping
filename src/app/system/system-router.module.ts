import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {SystemComponent} from "./system-component";
import {BillPageComponent} from "./bill-page/bill-page.component";
import {HistryPageComponent} from "./histry-page/histry-page.component";
import {PlanningPageComponent} from "./planning-page/planning-page.component";
import {RecordsPageComponent} from "./records-page/records-page.component";
import {AuthGuard} from "../shard/services/auth.guard";
import {HistoryDetailComponent} from "./histry-page/history-detail/history-detail.component";

const routes:Routes=[
  {path:"", component: SystemComponent, canActivate:[AuthGuard],children:[
      {path:"bill", component: BillPageComponent},
      {path:"histry", component: HistryPageComponent},
      {path:"planning", component: PlanningPageComponent},
      {path:"records", component: RecordsPageComponent},
      {path:"histry/:id", component: HistoryDetailComponent},
    ]},
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[]
})

export class SystemRouterModule {

}
