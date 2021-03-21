import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { General } from '@models/general';
import { Traduction } from '@models/traduction';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() general!: General;
  @Input() traduction!: Traduction;
  @Input() config!: Config;

  constructor() { }

  ngOnInit(): void {
  }

}
