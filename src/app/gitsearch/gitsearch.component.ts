import { Component, OnInit, resolveForwardRef } from '@angular/core';
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
  username: string = "Akumucollins";
  today: number = Date.now();
  
  constructor(private gitsearchService: GitsearchService) { }

  findUser(username) {
    this.gitsearchService.updateProfile(this.username);
    this.gitsearchService.getProfileInfo(this.username).subscribe(details => {
      this.details = details;
    });
    this.gitsearchService.getRepoInfo().subscribe(repos => {
      this.repos = repos;
    })
    this.username = "" 
  }
 
  ngOnInit(){
    this.findUser("Akumucollins")
  }

}
