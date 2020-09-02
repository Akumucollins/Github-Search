import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service'
import { Repositories } from '../repositories'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  // details: any;
  repos: any = Repositories;
  // username: string;

  constructor(private gitsearchService: GitsearchService) { }
  
  findUser() {

    this.gitsearchService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

  }

  ngOnInit() {

  }

}
