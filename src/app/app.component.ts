import { Component, OnInit } from '@angular/core';
import {ProduitService} from './produit.service';
import {Observable,of,from} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TP03-JOLIVEL-Corentin';

  constructor(private produitService : ProduitService)  { }

  observable1$ : Observable<any> = null;
  
  ngOnInit(): void {
  }



    onClickBackend() 
    {
      this.observable1$ = this.produitService.getProduits ();
        
    }


  }





