import { ElementRef, Injectable } from '@angular/core';
import { Config } from '@models/config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public initCss(elementRef: ElementRef, config: Config): void {
    elementRef.nativeElement.ownerDocument.body.style.backgroundColor = config.backgroundColor;
    elementRef.nativeElement.ownerDocument.body.style.color = config.color;
  }

  public getNavigatorLang(possibleLangs: string[]): string {
    const navigatorlang = navigator.language.substr(0,2).toLowerCase();
    const langIndex = possibleLangs.indexOf(navigatorlang);

    return (langIndex !== -1) ? navigatorlang : possibleLangs[0];
  }
}
