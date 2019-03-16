import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieComponent } from './componentes/pie/pie.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PaisajesComponent } from './componentes/paisajes/paisajes.component';
import { SuscripcionComponent } from './componentes/suscripcion/suscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    PaisajesComponent,
    SuscripcionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
