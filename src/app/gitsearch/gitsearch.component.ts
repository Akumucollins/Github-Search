import { Component, OnInit } from '@angular/core';
import { GitsearchService } from '../gitsearch.service'
import {FormsModule} from  '@angular/forms';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  details: any;
  repos: any;
  username: string;

  constructor(private gitsearchService: GitsearchService) { }

  findUser() {
    this.gitsearchService.updateProfile(this.username);
    this.gitsearchService.getProfileInfo(this.username).subscribe(details => {
      this.details = details;
    });
    this.gitsearchService.getRepoInfo().subscribe(repos => {
      this.repos = repos;
    })
  }

  ngOnInit(){
    
  }

}
