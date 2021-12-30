import { UserService } from './../../service/user.service';
import { CompanyService } from './../../service/company.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import {IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  countryList = [];
  companyList = [];
  userList = [];
  myForm:any;

  dropdownSettings:IDropdownSettings = {};
  selectedItems = [];

  dropdownSettingsCompany:IDropdownSettings = {};
  selectedItemsCompany = [];

  dropdownSettingsUser:IDropdownSettings = {};
  selectedItemsUser = [];

  constructor(
    private fb: FormBuilder,
    private country:CountryService,
    private company:CompanyService,
    private user:UserService) { }

  ngOnInit(): void {
    this.country.getCountry().subscribe(
      result => this.countryList = result as never[]
    );

    this.company.getComapany().subscribe(
      result => this.companyList = result as never[]
    );

    this.user.getUser().subscribe(
      result => this.userList = result as never[]
    );

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettingsCompany = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.dropdownSettingsUser = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.myForm = this.fb.group({
      countryControl: [this.selectedItems]
  });
  }
  onItemSelect(item: any) {
    this.country.getCompanyByCountry(item.id as number).subscribe(
      (result:any) => {
        result.forEach((element:any) => {
          this.selectedItemsCompany.push({ id: element.id as never, name: element.name as never } as never)
        });      
      }
    );
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItemSelectCompany(item: any) {
    console.log(item);
  }
  onSelectAllCompany(items: any) {
    console.log(items);
  }

  onItemSelectUser(item: any) {
    console.log(item);
  }
  onSelectAllUser(items: any) {
    console.log(items);
  }
}
