import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
import { articuloModel } from '../../models/articulo.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  articulos: articuloModel[] = [];

  constructor( private auth: AuthService,
              private router: Router,
              private articles: ArticlesService) {

              this.articles.getArticles()
              .subscribe( (data:any) => {
                data.sort();
                this.articulos = data.slice(data.length-5,data.length);                
                
              });
           
  }

  ngOnInit() {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}

