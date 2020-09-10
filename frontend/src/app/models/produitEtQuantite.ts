import { Produit } from './produit';

export class ProduitEtQuantite{
    produit: Produit;
    quantite: number;


    constructor(produit: Produit, quantite: number) {
    	this.produit = produit;
    	this.quantite = quantite;
    }

    getPrixTotal():number {
    	return this.produit.prix * this.quantite;
    }
}
