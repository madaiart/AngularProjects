import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-oxford-word',
  templateUrl: './oxford-word.component.html',
  styleUrls: ['./oxford-word.component.css']
})
export class OxfordWordComponent implements OnInit {

  words: any[];

  constructor() {
  }

  ngOnInit(): void {
    this.words = [{Word: 'willigness', Meaning: 'word', Use: 'Count'},
      {Word: 'moon', Meaning: 'Luna', Use: 'Count'},
      {Word: 'sun', Meaning: 'star', Use: 'Non Count'}];
  }
}
