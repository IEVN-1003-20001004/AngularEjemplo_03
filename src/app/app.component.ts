import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEjemplo_03';

  duplicaValor(valo:number):number{
    return valo*3;
  }

  pelicula={
    titulo:'Spider-Man',
    FechaLanzamiento:new Date(),
  }
}

