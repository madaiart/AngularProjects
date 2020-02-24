import {Component, OnInit} from '@angular/core';
import {WordsService} from '../../services/words.service';

@Component({
  selector: 'app-oxford-word',
  templateUrl: './oxford-word.component.html',
  styleUrls: ['./oxford-word.component.css']
})
export class OxfordWordComponent implements OnInit {

  words: any[];

  constructor(private service: WordsService) {
  }

  ngOnInit(): void {
    this.service.searchWords('example')
      .subscribe(value => {
        console.log(value.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text);
        this.words = value.results;
      });
  }
}
