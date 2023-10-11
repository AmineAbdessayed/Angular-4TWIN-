import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/Produits';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  products: Produit[] = [];
  showCount: boolean = false;
  libelleToCount: string = '';
  produitCount: number = 0;



  constructor( private produitService:ProductService){}

ngOnInit(){

  this.products=this.produitService.getAllProducts();

}
calculateProductsCount(libelle: string): void {
  this.showCount = true;
  this.libelleToCount = libelle;
  this.produitCount = this.produitService.getNbProductsByLibelle(libelle);
}







  

  }

