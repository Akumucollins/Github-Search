import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private username: string;

  constructor(private http: HttpClient) { }
  getProfile(username) {
    console.log(this.username)
    return this.http.get("https://api.github.com/users/" + username + "?access_token=" + environment.githubApiKey)

  }
  getRepo() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + environment.githubApiKey)
  }
  updateProfile(username: string) {
    this.username = username;
  }
}