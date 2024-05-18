import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

const UserComponents = [
  MatButton,
  MatIconModule,
  MatSlideToggleModule,
  MatSidenavModule,
  FormsModule
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
    AddContactComponent,
    //CreateCompanyComponent,
    //JoinCompanyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserComponents
  ],
  exports: [
    UserComponents
  ]
})
export class UserModule { }
