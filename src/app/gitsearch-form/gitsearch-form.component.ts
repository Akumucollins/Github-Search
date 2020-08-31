import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service'

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {

  details: any;
  repos: any;
  username: string;

  constructor(private gitsearchService: GitsearchService) { }

  findUser() {
    this.gitsearchService.updateProfile(this.username);
    this.gitsearchService.getProfileInfo(this.username).subscribe(details => {
      console.log(details);
      this.details = details;
    });
    this.gitsearchService.getRepoInfo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit(): void {
  }

}
