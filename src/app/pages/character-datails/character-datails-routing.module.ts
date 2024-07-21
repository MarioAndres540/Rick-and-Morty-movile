import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDatailsPage } from './character-datails.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterDatailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterDatailsPageRoutingModule {}
