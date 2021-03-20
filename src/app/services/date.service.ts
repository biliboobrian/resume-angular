import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDate(date: Date, format: string, today: string): string {
    return (date) ? DateTime.fromJSDate(date).toFormat(format) : today;
  }
}
