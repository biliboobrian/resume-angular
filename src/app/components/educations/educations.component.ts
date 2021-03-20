import { Component, Input, OnInit } from '@angular/core';
import { Education } from '@models/education';
import { Traduction } from '@models/traduction';
import { DateService } from '@services/date.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {

  @Input() educations!: Education[];
  @Input() traduction!: Traduction;

  constructor(
    public dateService: DateService
  ) { }

  ngOnInit(): void {
  }

}
