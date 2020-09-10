import { Produit } from './produit';
import { ProduitEtQuantite } from './produitEtQuantite';


export class Panier{
	_id: string;
	userId: string;
	commande: ProduitEtQuantite[] = [];

    constructor(json?: any) {
        if (json) {
            this._id = json._id ? json._id : null;
    	} //end json given

    };


    ajoutProduit(produit: Produit) {
        //on vérifie si le produit n est pas déjà dans le Panier
        const found = this.commande.find(element => element.produit._id == produit._id);
        //si non on ajoute le produit comme nouvel élèment de la commande
        if(!found) this.commande.push(new ProduitEtQuantite(produit,1));
        else found.quantite++;
    }

    getNbProduits():number {
        const reducer = (accumulator,produitEtQuantite) => { 
          accumulator += produitEtQuantite.quantite;
          return accumulator;
        };
        return this.commande.reduce(reducer,0);
    }


    getPrixTotal():number {
        const reducer = (accumulator,produitEtQuantite) => { 
          accumulator += produitEtQuantite.getPrixTotal();
          return accumulator;
        };
        return this.commande.reduce(reducer,0);
    }

} //end class