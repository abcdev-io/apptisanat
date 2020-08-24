import { Component, OnInit, Input  } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {


  id: number;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

}
