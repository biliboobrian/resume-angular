import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rate: number = 0;
  @Input() config!: Config;

  public filled!: number[];
  public empty!: number[];

  constructor() { }

  ngOnInit(): void {
    this.filled = Array(this.rate).fill(0);
    this.empty = Array(5 - this.rate).fill(0);
  }

}
