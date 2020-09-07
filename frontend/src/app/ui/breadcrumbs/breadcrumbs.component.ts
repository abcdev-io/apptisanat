import { Component, OnInit } from '@angular/core';

import { Breadcrumb } from '../../models/breadcrumb';

import { BreadcrumbService } from "../../services/breadcrumb.service";


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(
    private _breadcrumbService: BreadcrumbService
  ) { }

  breadcrumbs: Breadcrumb[] = [
  		new Breadcrumb({name:"Accueil"})
  	];

  ngOnInit(): void {
  	this._breadcrumbService.currentBreadcrumbs.subscribe(breadcrumbs => this.breadcrumbs = breadcrumbs);

  }

}
