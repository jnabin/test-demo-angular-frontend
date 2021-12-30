import { map } from 'rxjs/operators';
import { PaginatedTableService } from './../../service/paginated-table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css']
})
export class PaginatedTableComponent implements OnInit {
  userData: any = [];
  id!: number;
  page = 1;
  pageSize = 4;
  usersData: any = [];
  IsShowUserInfo = false;
  socialUserId?: number;
  closeResult = '';

  constructor(
    private usertableService:PaginatedTableService
  ) { 
    this.refreshUserData();
  }

  ngOnInit(): void {
    this.usertableService.getData().subscribe(
      result => {
        this.userData = result;
        this.usersData = this.userData
          .map((item:any) => ({...item}))
          .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      }
    );
  }

  refreshUserData(): void {
    this.usersData = this.userData
      .map((item:any) => ({...item}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
