import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: any;
  repos: any;
  username:string;

  constructor(private dataService: DataService) { }

  findUser(){
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
