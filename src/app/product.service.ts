import { Injectable } from '@angular/core';
import { Produit } from './models/Produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products:Produit[]=[
    
      { idProduit: 1, code: "127",libelle: "PC", prixUnitaire : 2000, tauxTVA :10 ,isTVAChanged: false },
      { idProduit: 2, code: "128",libelle: "TV", prixUnitaire : 1000, tauxTVA :20, isTVAChanged: false },
      { idProduit: 3, code: "128",libelle: "Table", prixUnitaire : 200, tauxTVA :30 , isTVAChanged: false },
      { idProduit: 4, code: "121",libelle: "Table", prixUnitaire : 200, tauxTVA :30 , isTVAChanged: false }

      
  ]

  constructor() { }


  getAllProducts():Produit[]{

    return this.Products;

  }

  getNbProductsByLibelle(libelle:string){

    return this.Products.filter(Produit => Produit.libelle === libelle).length;

  }





}
