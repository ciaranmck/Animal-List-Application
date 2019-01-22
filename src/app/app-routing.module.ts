import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  },
  {
    path: 'add',
    component: AddFormComponent
  },
  {
    path: ':animal',
    component: AnimalInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
