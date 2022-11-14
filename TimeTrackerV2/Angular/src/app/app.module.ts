import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';



import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { RegisterComponent } from './register/register.component';
import { InstructorComponent } from './instructor/instructor.component';
import { GroupsComponent } from './groups/groups.component';
import { AdminModalComponent } from './modals/admin-modal/admin-modal.component';
import { AdminRequestsModalComponent } from './Modals/admin-requests-modal/admin-requests-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatRippleModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import { EditTimeDialogComponent } from './Modals/edit-time-dialog/edit-time-dialog.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    LoginComponent,
    AdminDashComponent,
    RegisterComponent,
    GroupsComponent,
    AdminModalComponent,
    InstructorComponent,
    EditTimeDialogComponent,
    AdminRequestsModalComponent,

  ],
  entryComponents: [EditTimeDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatRippleModule,
    NgxChartsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
