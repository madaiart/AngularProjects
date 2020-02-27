import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];

  ngOnInit(): void {
    this.items = [{
      label: 'File',
      items: [
        {label: 'New', icon: 'fa fa-plus'},
        {label: 'Open', icon: 'fa fa-download'}
      ]
    },
      {
        label: 'Edit',
        items: [
          {label: 'Undo', icon: 'fa fa-refresh'},
          {label: 'Redo', icon: 'fa fa-repeat'}
        ]
      }];
  }
}
