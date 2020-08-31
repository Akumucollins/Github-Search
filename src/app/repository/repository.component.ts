import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  findUser() {

    this.dataService.getRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })

  }
}
