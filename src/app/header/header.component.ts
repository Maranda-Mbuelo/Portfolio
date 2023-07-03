import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(){

  }

  // brand: string = 'Mbuelo';
  time: number = Date.now();

  dismiss(): void {
    window.location.href = "Home/Mbuelo/Maranda";
  }

  myLinks = [
    {
      name: 'mySkills',
      link: 'Mbuelo/Maranda/My-Skills'
    },
    {
      name: 'Priorities',
      link: 'Mbuelo/Maranda/w/conditions'
    },
    {
      name: 'gallery',
      link: 'Mbuelo/Maranda/Pictures'
    },
    {
      name: 'Hire-Me',
      link: 'Mbuelo/Maranda/My-Contacts'
    }
  ];
  

  ngOnInit() {
  
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const closeBtn = document.querySelector(".close");
    const myHeader = document.querySelector(".myHeader");
    
    if (menuBtn && navigation && closeBtn && myHeader) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        if( navigation instanceof HTMLElement){
          navigation.style.visibility = 'visible';
        } 
        if( closeBtn instanceof HTMLElement){
          closeBtn.style.visibility = 'visible';
        } 
      })

      if(myHeader instanceof HTMLElement && closeBtn instanceof HTMLElement){

        if(myHeader.style.display == 'flex'){
          closeBtn.style.visibility = 'hidden';
        }
      }

    }
  }

}
