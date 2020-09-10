import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProduitsComponent } from './pages/liste-produits/liste-produits.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';
import { DetailsPanierComponent } from './pages/details-panier/details-panier.component';
const routes: Routes = [
	{ path: '', component: ListeProduitsComponent },
	{ path: 'produit/:id/:nom', component: DetailsProduitComponent },
	{ path: 'panier', component: DetailsPanierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
