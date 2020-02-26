import {Component, OnInit} from '@angular/core';
import {WordsService} from '../../services/words.service';
import {ActivatedRoute} from '@angular/router';
import {Varianteoxford} from '../../interfaces/varianteoxford';
import {Oxford} from '../../interfaces/oxford';

@Component({
  selector: 'app-variants',
  templateUrl: './variants.component.html',
  styleUrls: ['./variants.component.css']
})
export class VariantsComponent implements OnInit {

  variante: Oxford;

  constructor(private service: WordsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params.variantValue;
        this.service.getVariantForms(id).subscribe(resp => this.variante = resp);
      }
    );
  }

}
