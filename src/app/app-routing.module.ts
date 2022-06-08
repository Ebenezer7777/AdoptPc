import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthPageComponent } from './auth-page/auth-page.component';s = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'Panier', component: PanierComponent },
  { path: '/login', component: AuthPageComponent }, 
  { path: '**', redirectTo: '' }

];
eeeeeeeee