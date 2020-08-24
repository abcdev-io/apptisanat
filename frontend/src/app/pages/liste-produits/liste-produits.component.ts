import { Component, OnInit } from '@angular/core';
import {Produit} from '../../models/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {


  produits = [
	  new Produit({"_id":123456,"nom":"Robe Fuschia à frange"}),
	  new Produit({"_id":654321,"nom":"robe fuschia"}),
	  new Produit({"_id":123456,"nom":"robe fuschia"}),
	  new Produit({"_id":123456,"nom":"robe fuschia"}),
	  new Produit({"_id":123456,"nom":"robe fuschia"}),
	  new Produit({'_id':123456,'nom':"robe fuschia"})
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
