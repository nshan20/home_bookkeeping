import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {ShardModule} from "../shard/shard.module";
import {SystemRouterModule} from "./system-router.module";
import {SystemComponent} from "./system-component";
import {BillPageComponent} from "./bill-page/bill-page.component";
import {HistryPageComponent} from "./histry-page/histry-page.component";
import {PlanningPageComponent} from "./planning-page/planning-page.component";
import {RecordsPageComponent} from "./records-page/records-page.component";
import {MatMenuModule} from "@angular/material/menu";
import {SaitBarComponent} from "./sheard/components/sait-bar/sait-bar.component";
import {HeaderComponent} from "./sheard/components/header/header.component";
import {BillCardComponent} from "./bill-page/bill-card/bill-card.component";
import {CurrensyCardComponent} from "./bill-page/currensy-card/currensy-card.component";
import {BillService} from "./sheard/servisis/bill.service";
import {MomentPipe} from "./sheard/pipes/moment.pipe";
import {AppCategoryComponent} from "./records-page/app-category/app-category.component";
import {AppEventComponent} from "./records-page/app-event/app-event.component";
import {EditCategoryComponent} from "./records-page/edit-category/edit-category.component";
import {CategoryiesServis} from "./sheard/servisis/categoryies.servis";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {HistoryChartComponent} from "./histry-page/history-chart/history-chart.component";
import {HistoryDetailComponent} from "./histry-page/history-detail/history-detail.component";
import {HistoryEventsComponent} from "./histry-page/history-events/history-events.component";
import {HistoryFiltherComponent} from "./histry-page/history-filther/history-filther.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {FilterPipe} from "./sheard/pipes/filter.pipe";
import {eventsServis} from "./sheard/servisis/eventsServis";


@NgModule({
  declarations:[
    SystemComponent,
    BillPageComponent,
    HistryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SaitBarComponent,
    HeaderComponent,
    BillCardComponent,
    CurrensyCardComponent,
    MomentPipe,
    AppCategoryComponent,
    AppEventComponent,
    EditCategoryComponent,
    HistoryChartComponent,
    HistoryDetailComponent,
    HistoryEventsComponent,
    HistoryFiltherComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ShardModule,
    SystemRouterModule,
    RouterModule,
    MatMenuModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    NgxChartsModule
  ],
  exports:[NgxChartsModule],
  providers:[
    BillService,
    CategoryiesServis,
    eventsServis
  ]
})

export class SystemModule {
}
