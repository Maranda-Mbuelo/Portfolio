import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SupplyerService } from '../services/supplyer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  @Output() helloWorldEvent = new EventEmitter<void>();

  constructor(private supplyer: SupplyerService) {}
  
  isDarkMode: boolean = false;
  myParagraph1: string = "Since the beginning of my journey as a freelance designer and developer, I've never done any remote work for agencies or consulted for startups, and I haven't really worked with talented people to create any digital product for both businesses or consumer use.";
  myParagraph2: string = 'I offer a wide range of services, including brand design, programming, and teaching.';
  cardInfo: any = [];

  ngOnInit(): void {
    this.cardInfo = this.supplyer.myServices;
  }

  toggleDarkMode() {
    const elements = document.querySelectorAll<HTMLElement>('.blackPanel h1, .blackPanel p, .blackPanel h2, .blackPanel .miniWrap p');
    const card = document.querySelectorAll<HTMLElement>('.card');

    card.forEach((element) => {
      element.classList.toggle('card-dark-mode');
    })

  elements.forEach((element) => {
    element.classList.toggle('white-color');
  });
}
}
