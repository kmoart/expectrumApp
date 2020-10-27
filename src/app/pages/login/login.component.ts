import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from 'src/app/services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordatorio = false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {
    if( localStorage.getItem('email') ){
        this.usuario.email = localStorage.getItem('email');
        this.recordatorio = true;
    }
  }

  login( form: NgForm ){

    if( form.invalid ){
      return;
    }

    Swal.fire( '', 'Espere por favor...', 'info' );
    Swal.showLoading();
    //console.log( this.usuario );
    //console.log(form);

    this.auth.login( this.usuario )
    .subscribe( resp => {

        console.log( resp );
        Swal.close();

        if( this.recordatorio ){
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');

    }, (err) =>{
        console.log( err.error.error.message );
        Swal.fire( 'Error al autenticar', err.error.error.message, 'error' );
    });

  }

}

