import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit { 
  video: string = '/assets/videos/Motion_Graphics_Animated_Background.mp4';

justTesting =[
  {
    role: "C++", 
    description: 'Proficient in object-oriented programming and data structures.'
  },
  {
    role: "C#", 
    description: 'Experienced in developing Windows applications and also building APIs using Asp.NET.'
  },
  {
    role: "TypeScript", 
    description: 'Proficient in TypeScript, utilizing its advanced features like static typing, interfaces and modules.'
  },
  {
    role: "SQL", 
    description: 'Experienced in designing and managing relational databases using MySQL.'
  },
  {
    role: "HTML", 
    description: 'Experienced in creating responsive and accessible web pages using HTML5 and CSS3.'
  },
  {
    role: "CSS", 
    description: 'Proficient in styling web pages and creating animations using CSS3 and JavaScript.'
  }
];

  constructor(private router:Router){}

  @ViewChild('backgroundVideo') backgroundVideo!: HTMLVideoElement;

  ngOnInit(): void {
    const videoUrl = '/assets/videos/Motion_Graphics_Animated_Background.mp4';
    this.backgroundVideo.src = videoUrl;


    const goBackBtn = document.querySelector('.go-back');

    goBackBtn?.addEventListener('click', () => {
      this.router.navigate(['Home', 'Mbuelo', 'Maranda']);
    });

  }

}
