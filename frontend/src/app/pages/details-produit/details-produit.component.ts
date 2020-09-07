import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {Produit} from '../../models/produit';
import {ProduitService} from '../../services/produit.service';

import { Breadcrumb } from '../../models/breadcrumb';
import { BreadcrumbService } from "../../services/breadcrumb.service";

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  
  produit: Produit = new Produit();


  constructor(
  	private route: ActivatedRoute,
  	private _produitService: ProduitService,
    private _breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
  	let id = this.route.snapshot.paramMap.get('id');
  	this._produitService.getProduit(id).then(returnedProduit => {
  		if(!returnedProduit) console.error('produit non trouvé');
  		else {
        this.produit = returnedProduit;
  	    
        this._breadcrumbService.changeBreadcrumbs([
          new Breadcrumb({name:"Accueil","url":"/"}),
          new Breadcrumb({name:this.produit.nom}),
        ]);

      }
    })

  }

}
