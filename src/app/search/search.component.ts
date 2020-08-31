import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  details: any;
  repos: any;
  username: string;

  findUser() {
    this.dataService.updateProfile(this.username);
    this.dataService.getProfile(this.username).subscribe(details => {
      console.log(details);
      this.details = details;
    });
    this.dataService.getRepo().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {

  }


}
