import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username: string;
  private clientdetails: string = '2010cf629ef05c2519881eee9e8b9339fc0da25c';

  constructor(private http: HttpClient) { }

  getProfileInfo(username) {
    console.log(this.username)
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.clientdetails)

  }
  
  getRepoInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.clientdetails)
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
