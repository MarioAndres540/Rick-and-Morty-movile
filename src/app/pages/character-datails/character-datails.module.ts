import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDatailsPageRoutingModule } from './character-datails-routing.module';

import { CharacterDatailsPage } from './character-datails.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDatailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [CharacterDatailsPage],
})
export class CharacterDatailsPageModule {}
