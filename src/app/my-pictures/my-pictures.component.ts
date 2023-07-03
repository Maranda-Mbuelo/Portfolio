import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PicturesService } from '../services/pictures.service';


@Component({
  selector: 'app-my-pictures',
  templateUrl: './my-pictures.component.html',
  styleUrls: ['./my-pictures.component.css']
})
export class MyPicturesComponent {

  constructor(private http: HttpClient, private picturesService: PicturesService){}

  currentIndex: number = 0;
  initialImage: string = '/assets/images/20230122_122801.jpg';
  selectedImageIndex: number = 0;

  myPictures: any = [];

  nextButton() {
    if (this.currentIndex < this.myPictures.length - 1) {
      this.currentIndex++;
    } else {
      // Wrap around to the first image
      this.currentIndex = 0;
    }
  
    this.updateBigImage();
  }
  
  previousButton() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Wrap around to the last image
      this.currentIndex = this.myPictures.length - 1;
    }
  
    this.updateBigImage();
  }
  
  updateBigImage() {
    this.initialImage = this.myPictures[this.currentIndex].path;
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.initialImage = this.myPictures[index].path;
  }

  fetchImagePaths() {
    this.http.get('/assets/images').subscribe(
      (response: any) => {
        if (Array.isArray(response)) {
          this.myPictures = response.map((image: string) => {
            const name = image.substring(image.lastIndexOf('/') + 1, image.lastIndexOf('.'));
            return { name, path: image };
          });
        }
      },
      (error) => {
        console.error('Error fetching image paths:', error);
      }
    );
  }
  
  ngOnInit() {
    this.fetchImagePaths();
    this.myPictures = this.picturesService.myPictures;
  }
}
