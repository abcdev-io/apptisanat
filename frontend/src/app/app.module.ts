import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './pages/liste-produits/liste-produits.component';
import { ProduitComponent } from './ui/produit/produit.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    ProduitComponent,
    DetailsProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
