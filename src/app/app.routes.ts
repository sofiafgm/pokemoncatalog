import { Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'catalog', component: CardsComponent },
  { path: 'detail/:id', component: DetailComponent}
];
