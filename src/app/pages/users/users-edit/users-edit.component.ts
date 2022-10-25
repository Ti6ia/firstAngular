import { outputAst } from '@angular/compiler';
import { 
  Component, 
  OnInit, 
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  public user!: User;
  public id!: number;
  public sendingForm!: FormGroup;
  public isValid!: boolean;

  constructor(
    private userSerivces: UsersService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userSerivces.getUserByID(this.id).subscribe(res => {
      this.user = res;
    });
  }

  activateSubmit(event: FormGroup){
    this.sendingForm = event;
    this.isValid = this.sendingForm.valid;
  }

  editUser(){
    this.user = this.sendingForm.value;
    this.userSerivces.editUser(this.user).subscribe(res=>{
      console.log(res);
      console.log('Utente modificato con successo');
    })
  }

}
