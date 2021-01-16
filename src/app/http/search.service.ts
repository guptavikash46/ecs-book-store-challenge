import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BookData } from '../Model/bookdata.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  allBooks = new Subject<BookData[]>();
  searchedBooksToShow = new Subject<BookData[]>();
  booksAddedToCart = new Subject<BookData[]>();
  addedBooks: BookData[] = [];
  constructor() {
    this.booksAddedToCart.subscribe((
      data => {
        this.addedBooks = data;
      }
    ));
   }

  getAllCartsBooks(): BookData[] {
    //console.log(this.addedBooks.length);
    return this.addedBooks;
  }
} 
