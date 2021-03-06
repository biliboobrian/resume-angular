import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { Misc } from '@models/misc';
import { Traduction } from '@models/traduction';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  @Input() misc!: Misc;
  @Input() traduction!: Traduction;
  @Input() config!: Config;

  constructor() { }

  ngOnInit(): void {
  }

}
