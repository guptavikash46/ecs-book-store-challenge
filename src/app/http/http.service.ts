import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ BookData } from 'src/app/Model/bookdata.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // bookdata = new Subject< BookData[]>();
  constructor(private httpClient: HttpClient) { }

  getBookDatas(): Observable<BookData[]> {
    return this.httpClient
    .get<BookData[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json');
  }
}
