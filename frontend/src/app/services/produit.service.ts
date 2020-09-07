import { Injectable } from '@angular/core';

import {Produit} from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

	produits = [
		new Produit({"_id":"1","nom":"bloque livre","thumbnailURI":"/assets/produits/1.jpg","prix":25.90}),
		new Produit({"_id":"2","nom":"chocolat","thumbnailURI":"/assets/produits/2.jpg","prix":99}),
		new Produit({"_id":"3","nom":"cloches","thumbnailURI":"/assets/produits/3.jpg","prix":72.50}),
		new Produit({"_id":"4","nom":"pots","thumbnailURI":"/assets/produits/4.jpg","prix":10.27}),
		new Produit({"_id":"5","nom":"lampe","thumbnailURI":"/assets/produits/5.jpg","prix":14}),
		new Produit({'_id':"6",'nom':"dragon","thumbnailURI":"/assets/produits/6.jpg","prix":70}),
		new Produit({'_id':"7",'nom':"maison","thumbnailURI":"/assets/produits/7.jpg","prix":200})
  	];



  constructor() { }



  getProduits():Promise<Produit[]> {
  	return Promise.resolve(this.produits);
  }

  getProduit(id:string):Promise<Produit> {
  	return Promise.resolve(this.produits.filter(produit => produit._id == id)[0]);
  }
}
