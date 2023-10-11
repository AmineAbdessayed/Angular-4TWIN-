import { Component } from '@angular/core';
import { PatageService } from '../patage.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


constructor( public _partage: PatageService){}

}
