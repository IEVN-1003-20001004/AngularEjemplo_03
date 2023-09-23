import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImg=!this.muestraImg;
}
  productos:IProductos[]=[
    {
    "Modelo":"Sentra",
    "Descripcion":"4 puertas Familiar",
    "year":"febrero 2 2022",
    "Precio":120000,
    "Marca":"Nissan",
    "Color":"Azul",
    "ImagenUrl":"https://www.hondavallejo.com.mx/inventoryphotos/9890/9261/ip/1.jpg"
    },
    {
      "Modelo":"A4",
      "Descripcion":"4 puertas Familiar",
      "year":"marzo 5 2022",
      "Precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenUrl":"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_fad629acf6f5472bbc13db7af69f39bd.jpg"
    },
    {
      "Modelo":"Rio",
      "Descripcion":"2 puertas Familiar",
      "year":"Febrero 2 2019",
      "Precio":130000,
      "Marca":"Kia",
      "Color":"Blanco",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxt2D-jHx2OeVZTO2ZZV473u5Rm_JJnqmDwS9ieUKM&s"
    },
  ]
}
