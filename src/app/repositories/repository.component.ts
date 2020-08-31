import { Component, OnInit } from '@angular/core';
import { DataService } from '../gitsearch.service'


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  details: any;
  repos: any;
  username: string;

  constructor(private dataService: DataService) { }

  findUser() {
    this.dataService.updateProfile(this.username);
    this.dataService.getProfileInfo(this.username).subscribe(details => {
      console.log(details);
      this.details = details;
    });
    this.dataService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }
  
  ngOnInit() {
  }

}
