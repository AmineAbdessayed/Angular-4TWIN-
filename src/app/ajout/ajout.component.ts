import { Component } from '@angular/core';
import { PatageService } from '../patage.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {


  hero = {

    name:'',
    power:0,
    image:''
  }
  heros: any[] =[];


  ajouter()
  {
    this._partage.heros.push(this.hero);
       this.hero= {

         name:'',
         power:0,
         image:''
       }



  }  

  constructor(public _partage: PatageService) {}
}
