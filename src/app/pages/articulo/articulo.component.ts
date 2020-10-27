import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { articuloModel } from '../../models/articulo.model';
import { ArticlesService } from '../../services/articles.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulo = new articuloModel();

  constructor( private articuloService: ArticlesService,
                private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if( id !== 'nuevo' ){
        this.articuloService.getArticle( id )
          .subscribe( ( resp:any ) =>{
            
            this.articulo = resp;
            this.articulo.id = id;
            
          });
    }

  }

  guardar( form: NgForm ){

    if( form.invalid){
      console.log('Formulario no válido');
      return;
    }

    Swal.fire('Espere', 'Guardando información', 'info');
    Swal.showLoading();

    let peticion : Observable<any>;

    if( this.articulo.id ){

      peticion = this.articuloService.updateArticle( this.articulo );

    }else{

      peticion = this.articuloService.createArticle( this.articulo );
      //  .subscribe( resp =>{
      //    console.log(resp);
      //});
    }

    peticion.subscribe( resp =>{
          Swal.fire(this.articulo.titulo, 'Se actualizó correctamente', 'success');
    });


  }

}

