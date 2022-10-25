import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firts-day';
  public opened!: boolean;
  public events: string[] = [];

  constructor(public translateService: TranslocoService){ }

  toggleMenu(): void {
    this.opened = !this.opened;
  }  

  toIta(){
    this.translateService.setActiveLang('it');
  }

  toEng(){
    this.translateService.setActiveLang('en');
  }
}
