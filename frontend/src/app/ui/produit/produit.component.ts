import { Component, OnInit, Input  } from '@angular/core';
import { Router} from '@angular/router';


import {Produit} from '../../models/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {


  @Input() produit: Produit;

  constructor(
  	private router: Router
  ) { }

  ngOnInit(): void {
  }


  detailsProduit() {
  	const noSpaceRegex = / /gi;
  	const noStrangeCaracter = /[^a-z0-9\-]/gi;
  	this.router.navigate(['/produit/'+this.produit._id+'/'+this.produit.nom.toLowerCase().replace(noSpaceRegex,'-').replace(noStrangeCaracter,'')]);
  }

}
