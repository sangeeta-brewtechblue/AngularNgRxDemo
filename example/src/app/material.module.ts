import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import {    MatToolbarModule } from '@angular/material/toolbar';
import {   MatIconModule  } from '@angular/material/icon';
import {   MatCardModule  } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
@NgModule({

imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule

],

exports: [

MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatGridListModule
]

})

export class MaterialModule {}