import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  private username: string;
  private clientdetails: string = '361808b989d3d49cd11638e1f5659d553dd49c5b';

  constructor(private http: HttpClient) {
    console.log("service is now ready");

  }
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
