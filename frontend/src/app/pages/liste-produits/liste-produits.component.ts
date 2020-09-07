import { Component, OnInit } from '@angular/core';


import {Produit} from '../../models/produit';
import {ProduitService} from '../../services/produit.service';



@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {


  produits: Produit[] = [];
  constructor(
    private _produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this._produitService.getProduits().then(returnedProduits => {
      this.produits = returnedProduits;
    });
  }

}
