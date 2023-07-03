import { Component, OnInit, ViewChild } from '@angular/core';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild(OffersComponent) offersComponent!: OffersComponent;
  name: string = 'Mbuelo Maranda';
  role: string = '-a s/t Developer and designer.';
  story: string = 'Freelancer providing services for programming and design content needs. Join me below and lets get Cracking!';
  myImage: string = '/assets/images/SmartSelect_20230701-221445_LinkedIn.jpg';
  navigation = document.querySelector('.navigation');
  isDarkMode: boolean = false;
  hoverEffectEnabled:boolean = false;
  lightMode: string = 'Light';
  homepage: string = '/Home/Mbuelo/Maranda';


  ngOnInit(): void {
    this.hoverEffectEnabled = true;
  }

  cardBackGround(){
    let element = document.querySelector('.card');

    if(element){
      let newBackground = element.classList.toggle('card-dark-Mode');
    }

  }


  darkModeFunction(){

    const elements = document.querySelectorAll<HTMLElement>('.modeChoser, .navigation, h1, h3, p');
    const section = document.querySelector<HTMLElement>('section');

    if(section){
      section.classList.toggle('dark-mode-background');
      this.offersComponent.toggleDarkMode();
    }

    elements.forEach((element) => {
      element.classList.toggle('dark-mode');
    })
  }
}
