import { 
  Component, 
  Input, 
  Output,
  OnChanges, 
  OnInit, 
  SimpleChanges,
  EventEmitter
} from '@angular/core';
import { 
  FormGroup, 
  FormControl 
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  public form!: FormGroup;
  @Input() user!: User;
  @Output() sendingForm = new EventEmitter<FormGroup>();

  constructor(private userService: UsersService) {
    this.form = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      phone: new FormControl('', Validators.pattern('^[0-9]*$'))
    });
    this.form.valueChanges.subscribe(res => {
      this.sendingForm.emit(this.form);
    });
  }

  ngOnInit(): void {
    /* console.log(this.form); */
  }
  
  ngOnChanges(changes: SimpleChanges): void {   //quando qualcosa cambia (arrivo dei dati dall'api)
    this.form.patchValue(this.user);  //riempio il form con i dati di user (i campi devono essere gli stessi)
  }

  onSubmit() {
    /* const user = <User>{
      id: 900,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      phone: this.form.value.phone
    }
    this.userService.addUser(user).subscribe(res => console.log(res)); */
  }

}
