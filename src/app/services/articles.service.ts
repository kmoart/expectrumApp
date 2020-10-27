import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articuloModel } from '../models/articulo.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private url = 'https://expectrumapp.firebaseio.com';

  constructor(private http: HttpClient ) { }

  createArticle( articulo: articuloModel){

    return this.http.post(`${this.url}/articulos.json`, articulo )
      .pipe(
        map( (resp: any) =>{
          articulo.id = resp.name;
          return articulo;
        })
      );

  }

  updateArticle( articulo: articuloModel){

    const articuloTemp = {
      ...articulo //Operador spread
    };

    delete articuloTemp.id;

      return this.http.put( `${this.url}/articulos/${ articulo.id }.json`, articuloTemp );
  }

  getArticles(){
    
     return this.http.get(`${this.url}/articulos.json`)
        .pipe(
          map( resp => this.crearArreglo(resp) ),
          delay( 1500 )
        );
     
  }

  private crearArreglo( articulosObj: Object){
    const articulos: articuloModel[] = [];

    if ( articulosObj === null ) 
        { return []; }

    Object.keys( articulosObj ).forEach( key => {

      const articulo: articuloModel = articulosObj[key];

      articulo.id = key;

      articulos.push( articulo );

    });

    return articulos;
  }


  getArticle( id: string){

    return this.http.get(`${this.url}/articulos/${ id}.json`);
  
  }

}

