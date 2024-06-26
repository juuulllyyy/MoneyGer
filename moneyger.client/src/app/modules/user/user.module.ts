import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ListsComponent } from './components/lists/lists.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { JoinCompanyComponent } from './components/join-company/join-company.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { SalesGraphComponent } from './components/sales-graph/sales-graph.component';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService,
  TooltipService, AccumulationChartModule, PieSeries3DService, AccumulationDataLabelService,
  PieSeriesService, AccumulationLegendService, AccumulationTooltipService, RadarSeriesService, AreaSeriesService} from '@syncfusion/ej2-angular-charts';
import { SegmentationGraphComponent } from './components/segmentation-graph/segmentation-graph.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FrequencyGraphComponent } from './components/frequency-graph/frequency-graph.component';
import { SearchPipe } from './components/contacts/search.pipe';
import { StatusComponent } from './components/status/status.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';
import { SplineSeriesService } from '@syncfusion/ej2-angular-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeesComponent } from './components/employees/employees.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { InviteSuccessComponent } from './components/invite-success/invite-success.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { ReportComponent } from './components/report/report.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const UserComponents = [
  MatButton,
  MatIconModule,
  MatSlideToggleModule,
  MatSidenavModule,
  FormsModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
]

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    GettingStartedComponent,
    ContactsComponent,
    ListsComponent,
    OrdersComponent,
    StatisticsComponent,
    CalendarComponent,
    ProfileComponent,
    EditProfileComponent,
    //AddContactComponent,
    SalesGraphComponent,
    SegmentationGraphComponent,
    FrequencyGraphComponent,
    SearchPipe,
    StatusComponent,
    EmployeesComponent,
    InventoryComponent,
    AddEmployeeComponent,
    //AddItemComponent,
    EditItemComponent,
    InviteSuccessComponent,
    SuccessDialogComponent,
    SettingsComponent,
    ConfirmDeleteComponent,
    EditCompanyComponent,
    ReportComponent,
    //EditContactComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserComponents,
    ChartModule,
    AccumulationChartModule, 
    FormsModule, MatChipsModule, MatChipListbox, MatDialogModule,MatProgressSpinnerModule,
    DecimalPipe
  ],
  exports: [
    UserComponents
  ],
  providers: [LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService,
    PieSeriesService, AccumulationDataLabelService, AccumulationLegendService,
    AccumulationTooltipService, RadarSeriesService, AreaSeriesService, SplineSeriesService]
})
export class UserModule { }
