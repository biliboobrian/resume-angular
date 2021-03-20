import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDate(date: Date, lang: string, today: string): string {
    return (date) ? Intl.DateTimeFormat(lang).format(date) : today;
  }
}
