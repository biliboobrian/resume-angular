import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '@models/config';
import { Resume } from '@models/resume';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as YAML from 'js-yaml';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private db: any = {};

  constructor(
    public httpClient: HttpClient
  ) { }

  getConfig(): Observable<Config> {
    return this.httpClient.get('assets/config.yaml', {
      responseType: 'text'
    }).pipe(
      map((data: string) => {
        const yaml = YAML.load(data) as any;
        return yaml.config;
      })
    );
  }

  getResumeData(lang: string): Observable<Resume> {
    if(this.db[lang]) {
      return new Observable<Resume>(subscriber => {
        subscriber.next(this.db[lang].resume);
        subscriber.complete();
      })
    } else {
      return this.httpClient.get(`assets/data.${lang}.yaml`, {
        responseType: 'text'
      }).pipe(
        map((data: string) => {
          const yaml = YAML.load(data) as any;
          this.db[lang] = yaml;
          return yaml.resume;
        })
      );
    }
  }
}
