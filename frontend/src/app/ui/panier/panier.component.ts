import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { PanierService } from "../../services/panier.service";
import { Panier } from "../../models/panier";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  nbProduits:number = 0;

  constructor(
  	private _panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit(): void {
  	this._panierService.panierSource.subscribe(panier => {
  		this.nbProduits = panier.getNbProduits();
  	});
  }


  goToDetailsPanier() {
    this.router.navigate(['/panier']);
  }

}
