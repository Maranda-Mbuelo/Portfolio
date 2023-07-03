import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }
  currentIndex: number = 0;
  initialImage: string = '/assets/images/20230122_122801.jpg';
  selectedImageIndex: number = 0;

  myPictures = [
    {
      name: 'maranda',
      path: '/assets/images/20230122_122801.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/mbuelo.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/groundShow.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/groundShow2.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/mbuelo-ndeme.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/mbuelo-ndeme2.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/mbuelo-ndodzo.jpg'
    },
    {
      name: 'Mbuelo Maranda',
      path: '/assets/images/mbuelo-ndodzo2.jpg'
    }
  ];
}
