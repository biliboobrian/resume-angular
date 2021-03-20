import { Component, Input, OnInit } from '@angular/core';
import { Misc } from '@models/misc';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {

  @Input() misc!: Misc;

  constructor() { }

  ngOnInit(): void {
  }

}
