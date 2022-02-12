import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  // tslint:disable-next-line: max-line-length
  url = `https://customsearch.googleapis.com/customsearch/v1?searchType=image&key=${environment.accessKey}&cx=${environment.searchEngineId}`;

  constructor(private http: HttpClient) { }

  get(searchWord: string): Observable<Object> {
    const csUrl = `${this.url}&q=${searchWord}`;
    console.log('url', csUrl);
    return this.http.get(csUrl);
    //.pipe(map((res: any) => res.items));
  }
}


