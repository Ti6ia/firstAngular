/* import { DialogRef } from '@angular/cdk/dialog'; */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }

  deleteUser(id: number){
    this.userService.deleteUserByID(id).subscribe(res => {
      console.log(res);
      console.log('Utente eliminato con successo');
    });
  }

}
