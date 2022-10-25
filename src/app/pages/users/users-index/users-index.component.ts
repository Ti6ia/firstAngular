import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AbstractControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})

export class UsersIndexComponent implements OnInit {

  public users!: User[];
  public dataSource!: MatTableDataSource<User>;
  readonly filtersForm!: AbstractControl;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UsersService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<User>;
    this.userService.getAllUsers().subscribe(response => {
      this.users = response.users;
      this.dataSource.data = this.users;
    });
    this.dataSource.filterPredicate = (data: User, filter: string): boolean => {
      return data.firstName.toLowerCase().includes(filter);
    };
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    filterValue.value = filterValue.value.trim().toLowerCase(); // Remove whitespace -> Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.value;
  }

  openDialog(user: User): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog closed');
    })
  }


}
