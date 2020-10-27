import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { ArticleComponent } from './pages/article/article.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';

import { JwPaginationModule } from 'jw-angular-pagination';
import { JwPaginationComponent } from './pages/jw-pagination/jw-pagination.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FooterComponent } from './pages/shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    ListComponent,
    ArticleComponent,
    NavbarComponent,
    JwPaginationComponent,
    ArticuloComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    JwPaginationModule
  ],
  entryComponents:[
    ArticleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
