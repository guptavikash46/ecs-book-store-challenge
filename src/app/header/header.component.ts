import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from '../http/search.service';
import { BookData } from '../Model/bookdata.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allBooksReceived: BookData[] = [];
  // allValuesCombined: any[] = [];
  // allData: string;
  searchedBooks: BookData[] = [];
  searchValue = '';
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.allBooks.subscribe(
      (data) => {
        this.allBooksReceived = data;
      }
    );
  }
  // getSearchedResults(text: string) :BookData[] {
  //   for(let book of this.allBooksReceived) {
  //     if((String(book.authors) == text) || (String(book.title) == text)
  //       || (String(book.language_code) == text) || (String(book.price) == text) ) {
  //         console.log("got hit");
  //         this.searchedBooks.push(book);
  //     }
  //   }
  //   alert("number of books found: "+this.searchedBooks.length);
  //   this.searchedBooks.splice(0, this.searchedBooks.length);
  //   return this.searchedBooks;
  // }
  onAddApplicant(f: NgForm) {
    this.searchedBooks.splice(0, this.searchedBooks.length);
    if(this.searchValue.length == 0) {
      alert("please enter a text to search");
    }
    else {
      console.log(this.searchValue);
      for(let book of this.allBooksReceived) {
        if((String(book.authors).toUpperCase() == this.searchValue.toUpperCase()) || (String(book.title).toUpperCase() == this.searchValue.toUpperCase())
          || (String(book.language_code).toUpperCase() == this.searchValue.toUpperCase()) || (String(book.price).toUpperCase() == this.searchValue.toUpperCase()) ) {
            //console.log("got hit");
            this.searchedBooks.push(book);
        }
      }
      alert("number of books found: "+this.searchedBooks.length);
      this.searchService.searchedBooksToShow.next(this.searchedBooks);
      //this.searchedBooks.splice(0, this.searchedBooks.length);
    }
  }

}
