import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListComponent } from './pages/list/list.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard] },
  { path: 'list'    , component: ListComponent, canActivate: [ AuthGuard] },
  { path: 'articulo/:id' , component: ArticuloComponent, canActivate: [ AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes , { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
