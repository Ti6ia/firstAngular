import { 
  Component, 
  OnInit 
} from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-show',
  templateUrl: './users-show.component.html',
  styleUrls: ['./users-show.component.css']
})

export class UsersShowComponent implements OnInit {
  public user!: User;
  public id!: number;

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

  

}
