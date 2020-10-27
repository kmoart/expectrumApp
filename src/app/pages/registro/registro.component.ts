import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  recordatorio = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit( form: NgForm ){

    if( form.invalid ){
      return;
    }

    Swal.fire( '', 'Espere por favor...', 'info' );
    Swal.showLoading();
    
    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp=>{
        console.log(resp);
        Swal.close();

        if( this.recordatorio ){
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

      }, ( err ) =>{
          console.log(err.error.error.message);
          Swal.fire( 'Error al autenticar', err.error.error.message, 'error' );
      });
  }


}

