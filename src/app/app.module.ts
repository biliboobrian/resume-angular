import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '@services/data.service';
import { LangService } from '@services/lang.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CvComponent } from './components/cv/cv.component';
import { EducationsComponent } from './components/educations/educations.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralComponent } from './components/general/general.component';
import { MiscComponent } from './components/misc/misc.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ConvertHtmlTagPipe } from './pipes/convert-html-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EducationsComponent,
    ExperiencesComponent,
    MiscComponent,
    GeneralComponent,
    ConvertHtmlTagPipe,
    AboutMeComponent,
    FooterComponent,
    CvComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, LangService],
  bootstrap: [AppComponent]
})
export class AppModule { }
