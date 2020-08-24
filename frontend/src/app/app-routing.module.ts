import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeProduitsComponent } from './pages/liste-produits/liste-produits.component';
import { DetailsProduitComponent } from './pages/details-produit/details-produit.component';

const routes: Routes = [
	{ path: '', component: ListeProduitsComponent },
	{ path: 'produit/:id/:nom', component: DetailsProduitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
