import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './main/home/home.component';

const userLang = navigator.language.slice(0,2);

const routes: Routes = [
  { path: `${userLang}/home`, component: HomeComponent },
  { path: '', redirectTo: `${userLang}/home`, pathMatch: 'full' },
  { path: '**', redirectTo: `${userLang}/home`, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
