import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NozComponent } from './noz/noz.component';
import { FormsModule } from '@angular/forms';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { ListProduitComponent } from './list-produit/list-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NozComponent,
    AjoutComponent,
    ListComponent,
    HeaderComponent,
    ListProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
