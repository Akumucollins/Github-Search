import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    GitsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
