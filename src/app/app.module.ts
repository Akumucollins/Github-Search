import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { GitsearchService } from './gitsearch.service'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchComponent,
    GitsearchFormComponent,
    RepositoriesComponent,
    HighlightDirective,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GitsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
