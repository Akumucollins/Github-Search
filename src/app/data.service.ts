import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username: string;
  private clientDetails: string = '${environment.githubApiKey}';

  constructor(private http: HttpClient) {
    console.log("Data is now ready");

  }
  getProfile(username) {
    console.log(this.username)
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + this.clientDetails)

  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.clientDetails)
  }
  updateProfile(username: string) {
    this.username = username;
  }
}