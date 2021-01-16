import { Component, OnChanges, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http/http.service';
import { SearchService } from 'src/app/http/search.service';
import { BookData } from '../bookdata.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {
  bookdatas: BookData[] = [];
  bookdatas2: BookData[] = [];
  withoutSearch: boolean = true;
  booksAddedCart: BookData[] = [];
  constructor(private httpService: HttpService, 
    private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getBookDatas().subscribe(
      (data) => {
        this.bookdatas = data;
        this.searchService.allBooks.next(data);
      }
    )
    //receiving searched books
    this.searchService.searchedBooksToShow.subscribe(
      (searchData) => {
        this.withoutSearch = false;
       // this.withSearch = true;
        this.bookdatas2 = searchData;
        console.log(this.bookdatas2[0].price);
      }
    );
  }
  onAdd(book: BookData){
    alert("Book added to cart");
    this.booksAddedCart.push(book);
  }
  onAddCartWithSearch(book: BookData) {
    alert("Book added to cart");
    this.booksAddedCart.push(book);
  }

  onCartAction() {
    if(this.booksAddedCart.length == 0) {
      alert("No books added yet!");
    }
    else {
      this.searchService.booksAddedToCart.next(this.booksAddedCart);
      this.router.navigate(["your-cart"]);
    }
  }
}
