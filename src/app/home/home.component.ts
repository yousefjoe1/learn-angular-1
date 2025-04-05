import { Component, inject, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  quotes = inject(QuotesService)

  ngOnInit(): void {// when component is loaded
      console.log(this.quotes.getQuotes());
      this.quotes.getQuotes().pipe(
        catchError(err => {
          console.log("🚀 ~ HomeComponent ~ ngOnInit ~ error:", err)
          throw err;

        })
      ).subscribe(v=> {
        console.log("🚀 ~ HomeComponent ~ ngOnInit ~ v:", v)
        
      })
  }
}
