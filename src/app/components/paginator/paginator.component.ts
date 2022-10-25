import {Component, Injectable, NgModule, OnInit} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
