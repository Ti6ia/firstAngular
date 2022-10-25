import { 
  Component, 
  OnInit 
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
  
  public sendingForm!: FormGroup;
  public user!: User;
  public isValid!: boolean;
  public opened!: boolean;

  constructor(private userSerivces: UsersService) { }

  ngOnInit(): void {
  }

  activateSubmit(event: FormGroup){
    this.sendingForm = event;
    this.isValid = this.sendingForm.valid;
  }

  addUser(){
    this.user = this.sendingForm.value;
    this.userSerivces.addUser(this.user).subscribe(res=>{
      console.log(res);
      console.log('Utente aggiunto con successo');
    })
  }

  toggleMenu(): void {
    this.opened = !this.opened;
  }  


}
