import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {path:"gitsearch",component:GitsearchComponent},
  {path:"repository",component:RepositoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
