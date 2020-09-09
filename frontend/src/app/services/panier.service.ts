import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Produit } from '../models/produit';
import { Panier } from '../models/panier';


@Injectable()
export class PanierService {

  public panierSource : BehaviorSubject<Panier>;

  panier: Panier;

  constructor() { 
  	this.panier = new Panier();
  	this.panierSource = new BehaviorSubject(this.panier);
  }

  ajoutProduit(produit: Produit) {
  	this.panier.ajoutProduit(produit);

  	console.log('ajoutProduit',this.panier);
    this.panierSource.next(this.panier);
  }

}