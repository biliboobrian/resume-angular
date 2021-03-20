import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { General } from '@models/general';
import { LangService } from '@services/lang.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input() general!: General;
  @Input() config!: Config;

  constructor(
    public langService: LangService
  ) { }

  ngOnInit(): void {
  }

  onChangeLang(lang: string): void {
    this.langService.langSwitch(lang);
  }
}
