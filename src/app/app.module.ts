import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PaginatedTableComponent } from './component/paginated-table/paginated-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    PaginatedTableComponent
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
