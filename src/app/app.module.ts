import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { MiscComponent } from './components/misc/misc.component';
import { GeneralComponent } from './components/general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    EducationsComponent,
    ExperiencesComponent,
    MiscComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
