import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WordsService} from '../../services/words.service';
import {ActivatedRoute} from '@angular/router';
import {Oxford} from '../../interfaces/oxford';

@Component({
  selector: 'app-oxford-word',
  templateUrl: './oxford-word.component.html',
  styleUrls: ['./oxford-word.component.css']
})

export class OxfordWordComponent implements OnInit {

  words: Oxford;

  constructor(private service: WordsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      param => {
        const q = param.q;
        this.service.searchWords(q).subscribe(resp => this.words = resp,
          error => {
            console.log('small error: ' + error.message);
          });
      },
      error => console.log('big error: ' + error.message));
  }

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }
}
