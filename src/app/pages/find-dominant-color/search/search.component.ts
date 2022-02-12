import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() imagesList: EventEmitter<string[]> = new EventEmitter();

  images: any[] = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
  }

  // Call ImageService, get and emit the images.
  getImages(query: string): void {
    this.images = [];
    this.imagesService.get(query).subscribe(
      (res: any) => {
        if (res && res.items) {
          this.images = res.items.map((i: any) => {
            return i.image.thumbnailLink;
          });
        }
        this.imagesList.emit(this.images);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
