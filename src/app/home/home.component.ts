import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WriterService } from '../services/writer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video: string = '/assets/videos/Animated_Background .mp4';
  readMore: string = 'Mbuelo/Maranda/Learn-More';
  skip: string = 'Mbuelo/Maranda/QuickPreview';

  myUrls = [
    {
      socialUrl: 'https://www.facebook.com/mbuelo.maranda.1/',
      class: 'fa-brands fa-facebook'
    },
    {
      socialUrl: 'https://www.instagram.com/maranda_mbuelo/',
      class: 'fa-brands fa-instagram'
    },
    {
      socialUrl: 'https://twitter.com/maranda_mbuelo',
      class: 'fa-brands fa-twitter'
    },
    {
      socialUrl: 'https://za.linkedin.com/in/maranda-marvin-592a42233',
      class: 'fa-brands fa-linkedin'
    },
    {
      socialUrl: 'https://www.github.com/marandadtc/',
      class: 'fa-brands fa-github'
    }
  ];

  constructor(
    private router: Router,
    private meta: Meta,
    private writerService: WriterService // Inject the WriterService
  ) {}

  isClicked = true;

  ngOnInit(): void {
    this.meta.updateTag({ name: 'Mbuelo Maranda Home Page', content: 'Mbuelo Maranda' });

    if (this.isClicked) {
      this.router.navigate(['Home/Mbuelo/Maranda']);
    }

    const target = document.getElementById('myParagraph');

     if (target) { 
      const options = {
        loop: false,
        typeSpeed: 40,
        deleteSpeed: 10,
        typeColor: 'white',
        cursorColor: 'red',
      };

      const text = `Hi, my name is Mbuelo Maranda, also known as Marvin. I am a 19-year-old self-taught programmer. <br>I have taught myself various programming languages including C++, C#, Python, Typescript, and SQL.<br> Using my skills, I have built this website using the Angular Framework.<br> I invite you to take a look and explore the features I have created. Thank you for visiting my site! <br>If you want to learn more about me and my journey in programming, feel free to click on the 'Read More' link below.`;

      this.writerService.writeText(target, text, options);
    }
  }
}
