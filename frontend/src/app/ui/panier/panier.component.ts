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

  constructor(
  	public panierService: PanierService,
    private router: Router
  ) { }

  ngOnInit(): void {}


  goToDetailsPanier() {
    this.router.navigate(['/panier']);
  }

}
