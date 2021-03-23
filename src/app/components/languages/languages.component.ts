import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { Language } from '@models/language';
import { Traduction } from '@models/traduction';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() languages!: Language[];
  @Input() traduction!: Traduction;
  @Input() config!: Config;

  constructor() { }

  ngOnInit(): void {
  }

}
