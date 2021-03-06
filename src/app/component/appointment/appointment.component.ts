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
  comapanyList = [];
  myForm:any;

  id!: number;
  page = 1;
  pageSize = 4;
  usersData: any[] = [];
  userData: any[] = [];
  IsShowUserInfo = false;
  socialUserId?: number;

  dropdownSettings:IDropdownSettings = {};
  selectedItems = [];

  dropdownSettingsCompany:IDropdownSettings = {};
  selectedItemsCompany = [];

  dropdownSettingsUser:IDropdownSettings = {};
  selectedItemsUser = [];

  constructor(
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
  }

  onItemSelect(item: any) {
    this.country.getCompanyByCountry(item.id as number).subscribe(
      (result:any) => {  
        for( var i = 0; i < result.length; i++){ 
          for(var j=0; j<this.userData.length; j++){
            if(result[i].id == this.userData[j].id){
              this.userData.splice(j,j+1);
              this.usersData = this.userData
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
            }
            
          }      
        }       
        result.forEach((element:any) => {
          this.userData.push(element); 
        });
        this.usersData = this.userData
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
      }
    );
  }

  onItemDeSelect(item: any) {
    this.country.getCompanyByCountry(item.id as number).subscribe(
      (result:any) => {   
        for( var i = 0; i < result.length; i++){ 
          for(var j=0; j<this.userData.length; j++){
            if(result[i].id == this.userData[j].id){
              this.userData.splice(j,j+1);
              this.usersData = this.userData
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
            }
            
          }      
        }  
      }
    );  
  }

  onItemDeSelectCompany(item: any) {
    this.company.getuserByComapny(item.id as number).subscribe(
      (result:any) => {   
        for( var i = 0; i < result.length; i++){ 
          for(var j=0; j<this.userData.length; j++){
            if(result[i].id == this.userData[j].id){
              this.userData.splice(j,j+1);
              this.usersData = this.userData
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
            }
            
          }      
        }  
      }
    );  
  }

  onItemDeSelectCompanyAll(items:any){
    this.userData = [];
    this.usersData = [];
  }

  onItemDeSelectAll(items:any){
    this.userData = [];
    this.usersData = [];
  }

  onSelectAll(items: any) {
    this.company.getComapany().subscribe(
      (result:any) => {  
        this.userData = [];
        result.forEach((element:any) => {
          this.userData.push(element); 
        }); 
        this.usersData = this.userData
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
      }
    );
  }

  onItemSelectCompany(item: any) {
    this.company.getuserByComapny(item.id as number).subscribe(
      (result:any) => {  
        for( var i = 0; i < result.length; i++){ 
          for(var j=0; j<this.userData.length; j++){
            if(result[i].id == this.userData[j].id){
              this.userData.splice(j,j+1);
              this.usersData = this.userData
                .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
            }
            
          }      
        }    
        result.forEach((element:any) => {
          this.userData.push(element); 
        });
        this.usersData = this.userData
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
      }
    );
  }
  onSelectAllCompany(items: any) {
    this.onSelectAll(items);
  }

  onItemSelectUser(item: any) {
    this.company.getCompanyByUser(item.id as number).subscribe(
      (result:any) => {  
        for(var j=0; j<this.userData.length; j++){
          if(result.id == this.userData[j].id){
            this.userData.splice(j,j+1);
            this.usersData = this.userData
              .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
          }          
        }     
        this.userData.push(result); 
        this.usersData = this.userData
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
      }
    );
  }

  onItemDeSelectUser(item: any) {
    this.company.getCompanyByUser(item.id as number).subscribe(
      (result:any) => {  
        for(var j=0; j<this.userData.length; j++){
          if(result.id == this.userData[j].id){
            this.userData.splice(j,j+1);
            this.usersData = this.userData
              .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize); 
          }          
        }     
      }
    );
  }

  onSelectAllUser(items: any) {
    console.log(items);
  }

  refreshUserData(): void {
    this.usersData = this.userData
      .map((item:any) => ({...item}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
