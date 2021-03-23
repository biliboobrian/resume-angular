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
  private config!: Config;

  constructor(
    public httpClient: HttpClient
  ) { }

  getConfig(): Observable<Config> {
    if(this.config) {
      return new Observable<Config>(subscriber => {
        subscriber.next(this.config);
        subscriber.complete();
      })
    } else {
    return this.httpClient.get('assets/config.yaml', {
      responseType: 'text'
    }).pipe(
      map((data: string) => {
        const yaml = YAML.load(data) as any;
        this.config = yaml.config;
        return yaml.config;
      })
    );
    }
  }

  getResumeData(lang: string): Observable<Resume> {
    if(this.db[lang]) {
      return new Observable<Resume>(subscriber => {
        subscriber.next(this.db[lang]);
        subscriber.complete();
      })
    } else {
      return this.httpClient.get(`assets/data.${lang}.yaml`, {
        responseType: 'text'
      }).pipe(
        map((data: string) => {
          const yaml = YAML.load(data) as any;
          this.db[lang] = yaml.resume;
          return yaml.resume;
        })
      );
    }
  }
}
