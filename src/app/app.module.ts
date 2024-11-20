import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorService } from './services/color.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { HeroComponent } from './components/hero/hero.component';
import { FactsComponent } from './components/facts/facts.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolBoxComponent } from './components/tool-box/tool-box.component';
import { SkillGraphComponent } from './components/skill-graph/skill-graph.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CvComponent } from './components/cv/cv.component';
import { FooterComponent } from './components/footer/footer.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    HeroComponent,
    FactsComponent,
    PictureCardComponent,
    SkillsComponent,
    ToolBoxComponent,
    SkillGraphComponent,
    ProjectsComponent,
    ProjectCardComponent,
    CvComponent,
    FooterComponent,
    HobbiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
