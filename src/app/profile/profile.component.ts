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

  ngOnInit() {
  }

}
