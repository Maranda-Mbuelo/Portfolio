import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MyPicturesComponent } from './my-pictures/my-pictures.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';
import { OffersComponent } from './offers/offers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MessageSectionComponent,
    PopUpComponent,
    AboutMeComponent,
    ConditionsComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    MyPicturesComponent,
    SkillsComponent,
    ProfileComponent,
    OffersComponent,
    PortfolioComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
