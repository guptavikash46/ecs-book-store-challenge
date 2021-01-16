import { Component, OnInit } from '@angular/core';
import { SearchService } from '../http/search.service';
import { BookData } from '../Model/bookdata.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addedBooks: BookData[];
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.addedBooks = this.searchService.getAllCartsBooks();
  }

}
