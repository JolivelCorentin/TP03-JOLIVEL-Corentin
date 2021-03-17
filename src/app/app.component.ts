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
  observable2$ : Observable<any> = null;
  limiteTelMoinsCher : any = 500;
  tabTel : Array<any> = [];
  
  ngOnInit(): void {

    this.observable2$ = from ([
      {"tel":"Samsung S20","prix":900},
      {"tel":"Iphone 10","prix":1500},
      {"tel":"Xiaomi","prix":300},
      {"tel":"WindowsPhone","prix":300}
  ]
  
    );

  }
    onClickGetProduits() 
    {
        this.observable1$ = this.produitService.getProduits();
    }

    
    onClickGetProduitsPasCher() 
    { 
        this.observable2$.pipe(filter (tel => tel.prix < this.limiteTelMoinsCher )).subscribe (tel => {this.tabTel.push (tel)});  
    }
  }





