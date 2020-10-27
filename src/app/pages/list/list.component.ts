import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from '../article/article.component';
import { articuloModel } from '../../models/articulo.model';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  items: articuloModel[] = [];
  pageOfItems: any[] =[];
  articulo: any;
  cargando = false;
   

  constructor(  private auth: AuthService,
                private router: Router,
                private articles: ArticlesService,
                private modalService: NgbModal) { 

  }

  ngOnInit() {

    this.cargando = true;

    this.articles.getArticles()
    .subscribe( (data:any) => {
      this.items = data;
      this.cargando = false;
    }); 
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  

  open( id: string ) {

    //getArticle(capital:string){

      this.articles.getArticle(id)
        .subscribe( (data:any) => {
          this.articulo = data;
         
          const modalRef = this.modalService.open(ArticleComponent);
          modalRef.componentInstance.my_modal_title = this.articulo.titulo;
          modalRef.componentInstance.my_modal_shortcontent = this.articulo.desccorta;
          modalRef.componentInstance.my_modal_longcontent = this.articulo.desclarga;
          modalRef.componentInstance.my_modal_image = this.articulo.imagen;
          modalRef.componentInstance.my_modal_date = this.articulo.fecha;
        }); 
    //}
   
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}

