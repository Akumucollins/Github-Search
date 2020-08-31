import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormsModule}from  '@angular/forms';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
