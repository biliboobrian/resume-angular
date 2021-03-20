import { Component, ElementRef, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { Resume } from '@models/resume';
import { DataService } from '@services/data.service';
import { LangService } from '@services/lang.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public resume!: Resume;
  public config!: Config;

  constructor(
    public dataService: DataService,
    private elementRef: ElementRef,
    private appService: AppService,
    private langService: LangService
  ) {
  }

  ngOnInit(): void {
    this.dataService.getConfig().subscribe((data: Config) => {
      this.config = data;

      const navLnaguage = this.appService.getNavigatorLang(this.config.langs);
      this.langService.langSwitch(navLnaguage);

      this.appService.initCss(this.elementRef, this.config);
    });

    

    this.langService.langSbj.subscribe(lang => {
      this.dataService.getResumeData(lang).subscribe((data: Resume) => {
        this.resume = data;
      });
    })
  }
}
