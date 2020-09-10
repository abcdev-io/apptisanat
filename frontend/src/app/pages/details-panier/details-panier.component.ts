import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../models/breadcrumb';
import { BreadcrumbService } from "../../services/breadcrumb.service";

import { PanierService } from "../../services/panier.service";
import { Panier } from "../../models/panier";


@Component({
  selector: 'app-details-panier',
  templateUrl: './details-panier.component.html',
  styleUrls: ['./details-panier.component.css']
})
export class DetailsPanierComponent implements OnInit {

  panier: Panier;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _panierService: PanierService,
  ) { }

  ngOnInit(): void {

  	this._breadcrumbService.changeBreadcrumbs([
      new Breadcrumb({name:"Accueil","url":"/"}),
      new Breadcrumb({name:"panier"}),
    ]);

    this._panierService.panierSource.subscribe(panier => {
  		this.panier = panier;
  	});

  }

}
