import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { babycareReducer } from './babycare.reducer';

import { ChildSaraComponent } from './child-sara/child-sara.component';
import { ChildTomComponent } from './child-tom/child-tom.component';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { ParentComponent } from './parent/parent.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } 
       from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ChildSaraComponent,
    ChildTomComponent,
    GrandParentComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({babycare:babycareReducer}, {}),
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
