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

  getImages(query: string): void {
    this.imagesService.get(query).subscribe(
      (res: any) => {
        this.images = res.items.map((i: any) => {
          return i.image.thumbnailLink;
        });
        this.imagesList.emit(this.images);
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
