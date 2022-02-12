import { Component, Input, OnInit } from '@angular/core';
import { FindDominantColor } from '../helper/find-dominant-color';

@Component({
  selector: 'find-dominant-color',
  templateUrl: './find-dominant-color.component.html',
  styleUrls: ['./find-dominant-color.component.scss']
})
export class FindDominantColorComponent implements OnInit {

  colorList: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getImages(imagesList: string[]): void {
    this.getColorList(imagesList);
  }

  getColorList(imageList: string[]): void {
    this.colorList = [];
    console.log(imageList);
    imageList.forEach((imageUrl) => {
      this.getDominantColor(imageUrl);
    });
  }

  getDominantColor(imageUrl: string): void {
    const img = document.createElement('img');
    img.setAttribute('src', imageUrl);
    img.crossOrigin = 'Anonymous'; // To avoid cross origin issue.
    img.addEventListener('load', () => {
      const findDominantColor = new FindDominantColor();
      const dColor = findDominantColor.getDominantColor(img, 10);
      this.colorList.push({ url: imageUrl, color: dColor });
      console.log(dColor, this.colorList);
    });
  }
}
