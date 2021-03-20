import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { Experience } from '@models/experience';
import { Traduction } from '@models/traduction';
import { LangService } from '@services/lang.service';
import { DateService } from '@services/date.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input() experiences!: Experience[];
  @Input() traduction!: Traduction;
  @Input() config!: Config;
  
  constructor(
    public dataService: DateService,
    public langService: LangService
  ) { }

  ngOnInit(): void {
  }

}
