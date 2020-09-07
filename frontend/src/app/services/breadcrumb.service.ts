import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Breadcrumb } from '../models/breadcrumb';


@Injectable()
export class BreadcrumbService {

  private breadcrumbSource = new BehaviorSubject([]);
  currentBreadcrumbs = this.breadcrumbSource.asObservable();

  constructor() { }

  changeBreadcrumbs(breadcrumbs: Breadcrumb[]) {
    this.breadcrumbSource.next(breadcrumbs)
  }

}