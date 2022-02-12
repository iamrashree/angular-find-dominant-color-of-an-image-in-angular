import { Component, Input, OnInit } from '@angular/core';
import { FindDominantColor } from '../helper/find-dominant-color';

@Component({
  selector: 'find-dominant-color',
  templateUrl: './find-dominant-color.component.html',
  styleUrls: ['./find-dominant-color.component.scss']
})
export class FindDominantColorComponent implements OnInit {

  colorList: any[] = [];
  noImageFound: string;
  constructor() { }

  ngOnInit(): void {
  }

  // Will be called when the search component emits the data.
  getImages(imagesList: string[]): void {
    if (imagesList.length > 0) {
      this.getColorList(imagesList);
    } else {
      this.noImageFound = 'No Images Found...';
    }
  }

  // Method responsible to call the method to get the dominant color of the image url.
  getColorList(imageList: string[]): void {
    this.colorList = [];
    imageList.forEach((imageUrl) => {
      this.getDominantColor(imageUrl);
    });
  }

  // Finding dominant color and pushing the color to string array.
  getDominantColor(imageUrl: string): void {
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    img.crossOrigin = 'Anonymous'; // To avoid cross origin issue.
    img.addEventListener('load', () => {
      const findDominantColor = new FindDominantColor();
      const dColor = findDominantColor.getDominantColor(img, 10);
      this.colorList.push({ url: imageUrl, color: dColor });
    });
  }
}
