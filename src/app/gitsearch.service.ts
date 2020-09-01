import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username: string;
  private api = environment.apiUrl;
  // private clientdetails: string = '519773009eeb554bd075badd8b93bba230c613c3';

  constructor(private http: HttpClient) {
    this.username = "Akumucollins"
  }

  getProfileInfo(username) {
    console.log(this.username)
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.api)
  }
  
  getRepoInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.api)
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
