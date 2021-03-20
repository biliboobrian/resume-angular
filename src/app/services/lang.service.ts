import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  private currentLang!: string;
  public langSbj: Subject<string>;

  constructor() { 
    this.langSbj = new Subject<string>()
  }

  langSwitch(str: string): void {
    this.currentLang = str;
    this.langSbj.next(str);
  }

  getCurrentLang(): string {
    return this.currentLang;
  }

  isCurrentLang(str: string): boolean {
    return (this.currentLang === str);
  }
}
