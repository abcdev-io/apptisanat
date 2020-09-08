import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './pages/liste-produits/liste-produits.component';
import { ProduitComponent } from './ui/produit/produit.component';
import { BreadcrumbsComponent } from './ui/breadcrumbs/breadcrumbs.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';


import { BreadcrumbService } from './services/breadcrumb.service';
import { PanierComponent } from './ui/panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    ProduitComponent,
    BreadcrumbsComponent,
    DetailsProduitComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
