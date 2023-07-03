import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import TWriter from 't-writer.js';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private location:Location, private router:Router){}

  heading: string = 'My Coding Journey';
  button: string = 'Go Back';

  ngOnInit(): void {

    const goBackBtn = document.querySelector('.go-back');

    goBackBtn?.addEventListener('click', () => {
      this.router.navigate(['Home', 'Mbuelo', 'Maranda']);
    });

    const target = document.querySelector('.my-text');


    const options = {
      loop: false,
      typeSpeed: 20,
      deleteSpeed: 10,
      typeColor: 'white',
      cursorColor: 'red',
    };

    const writer = new TWriter(target, options);
    writer
      .type("As a self-taught coder, my journey has been a challenging yet fulfilling one. Starting from scratch with C++ as my first programming language, I have steadily gained knowledge and expertise in object-oriented programming and data structures. With my proficiency in C++, I was able to assist a friend in completing a C# project, which further enhanced my skills in Windows application and game development using Unity. Learning Angular and TypeScript was a turning point for me, as it allowed me to develop websites and host them online. The acquisition of Angular also unlocked the ability to build cross-platform apps with Ionic for both Android and iOS. I am also able to build basic games using C# and C++. My determination to learn and improve my skills has driven me to write complex logical algorithms that can be deployed to solve real-world problems. I am excited to share my skills with clients and help bring their ideas to life through the power of coding.")
      .rest(1000)
      .removeCursor()
      .rest(Infinity)
      .start();



      this.location.subscribe((popStateEvent) => {
        if (popStateEvent.type === 'popstate') {
          this.router.navigate(['Home', 'Mbuelo', 'Maranda']);
        }
      })

  }

}
