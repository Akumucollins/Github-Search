import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username: string;
  private clientdetails = environment.githubApiKey;
  // private clientdetails: string = '519773009eeb554bd075badd8b93bba230c613c3';

  constructor(private http: HttpClient) {}

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
