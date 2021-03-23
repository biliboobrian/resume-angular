import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Config } from '@models/config';
import { Resume } from '@models/resume';
import { DataService } from '@services/data.service';
import { LangService } from '@services/lang.service';
import { Subject, Subscription } from 'rxjs';
import { CvService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit, OnDestroy {

  public resume!: Resume;
  public config!: Config;
  public routeSub!: Subscription;
  public langSub!: Subscription;

  constructor(
    public dataService: DataService,
    private elementRef: ElementRef,
    private cvService: CvService,
    private langService: LangService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.langSub = this.langService.langSbj.subscribe(lang => {
      this.dataService.getResumeData(lang).subscribe((data: Resume) => {
        this.resume = data;
        this.titleService.setTitle(this.cvService.getTitle(this.resume.general));
      });
    });
    
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.dataService.getConfig().subscribe((data: Config) => {
        this.config = data;
  
        let navLnaguage = params.lang;
        if(!navLnaguage) {
          navLnaguage = this.cvService.getNavigatorLang(this.config.langs);
        }
  
        this.langService.langSwitch(navLnaguage);
        this.cvService.initCss(this.elementRef, this.config);
      });
    });
  }
   

  ngOnDestroy(): void {
    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if(this.langSub) {
      this.langSub.unsubscribe();
    }
    
  }
}
