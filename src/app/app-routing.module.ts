import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitsearchComponent } from './gitsearch/gitsearch.component';
import { RepositoriesComponent } from 'src/app/repositories/repositories.component';

const routes: Routes = [
  {path:"gitsearch",component:GitsearchComponent},
  {path:"repositories",component:RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
