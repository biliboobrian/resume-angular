import { Component, Input, OnInit } from '@angular/core';
import { Education } from '@models/education';
import { Traduction } from '@models/traduction';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

  @Input() educations!: Education[];
  @Input() traduction!: Traduction;

  constructor() { }

  ngOnInit(): void {
  }

}
