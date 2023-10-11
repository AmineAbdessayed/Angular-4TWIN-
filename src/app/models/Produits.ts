export class Produit {
    idProduit: number;
    code: string;
    libelle: string;
    prixUnitaire: number;
    tauxTVA: number;
    isTVAChanged: boolean; // Change the type to boolean
  
    constructor() {
      this.idProduit = 0;
      this.code = "";
      this.libelle = "";
      this.prixUnitaire = 0;
      this.tauxTVA = 0;
      this.isTVAChanged = false; // Assign the default value
    }
  }
  