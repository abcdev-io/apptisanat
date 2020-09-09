import { Component, OnInit } from '@angular/core';


import { PanierService } from "../../services/panier.service";
import { Panier } from "../../models/panier";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  nb:number = 0;

  constructor(
  	private _panierService: PanierService
  ) { }

  ngOnInit(): void {
  	this._panierService.panierSource.subscribe(panier => {

  		const reducer = (accumulator,produitEtQuantite) => { 
  			accumulator += produitEtQuantite.quantite;
  			return accumulator;
  		};
  		this.nb = panier.commande.reduce(reducer,0);
  	});
  }

}
