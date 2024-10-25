import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorService } from './services/color.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeroComponent } from './hero/hero.component';
import { FactsComponent } from './facts/facts.component';
import { PictureCardComponent } from './picture-card/picture-card.component';
import { SkillsComponent } from './skills/skills.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';
import { SkillGraphComponent } from './skill-graph/skill-graph.component';

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
    SkillGraphComponent
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
