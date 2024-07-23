import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'projects/gallery/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '600px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSwipe: true,
        previewCustomText: true,
        previewDescription: true,
        previewZoom: true,
        previewCustomTextMaxWidth: '450px',
        imageCustomText: true,
        imageCustomTextMaxWidth: '450px',
        imageDescription: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
        imageSwipe: true
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        imageSwipe: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/gallery/1-small.jpeg',
        medium: 'assets/img/gallery/1-medium.jpeg',
        big: 'assets/img/gallery/1-big.jpeg',
        customText: [
          ['Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum massa malesuada sapien'],
          ['Text 2: 0000', 'Text 3: 000000'],
          ['Text 4: 00.1111', 'Text 5: 10'],
        ],
        description: 'test.jpeg'
      },
      {
        small: 'assets/img/gallery/2-small.jpeg',
        medium: 'assets/img/gallery/2-medium.jpeg',
        big: 'assets/img/gallery/2-big.jpeg',
        customText: [
          ['Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum massa malesuada sapien'],
          ['Text 2: 0000', 'Text 3: 000000'],
          ['Text 4: 00.1111', 'Text 5: 10'],
        ]
      },
      {
        small: 'assets/img/gallery/3-small.jpeg',
        medium: 'assets/img/gallery/3-medium.jpeg',
        big: 'assets/img/gallery/3-big.jpeg',
        customText: [
          ['Text 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum massa malesuada sapien'],
          ['Text 2: 0000', 'Text 3: 000000', 'Text 4: 00.1111', 'Text 5: 10'],
        ]
      },
      {
        small: 'assets/img/gallery/4-small.jpeg',
        medium: 'assets/img/gallery/4-medium.jpeg',
        big: 'assets/img/gallery/4-big.jpeg'
      },
      {
        small: 'assets/img/gallery/4-small.jpeg',
        medium: 'assets/img/gallery/4-medium.jpeg',
        big: 'assets/img/gallery/4-big.jpeg'
      },
      // {
      //   small: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4',
      //   medium: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4',
      //   big: 'https://html5box.com/html5gallery/images/BigBuckBunny_1.mp4'
      // }
    ];
  }
}
