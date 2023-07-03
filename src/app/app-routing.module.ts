import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { MyPicturesComponent } from './my-pictures/my-pictures.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home/Mbuelo/Maranda', pathMatch: 'full' }, 
  {path: 'Home/Mbuelo/Maranda', component: HomeComponent },
  {path: 'Mbuelo/Maranda/My-Skills', component: SkillsComponent},
  {path: 'Mbuelo/Maranda/My-Contacts', component: MessageSectionComponent},
  {path: 'Mbuelo/Maranda/w/conditions', component: ConditionsComponent},
  {path: 'Mbuelo/Maranda/Learn-More', component: AboutMeComponent}, 
  {path: 'Mbuelo/Maranda/Pictures', component: MyPicturesComponent},
  {path: 'Mbuelo/Maranda/QuickPreview', component: ProfileComponent }, 
  { path: 'Mbuelo/Maranda/:id', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
