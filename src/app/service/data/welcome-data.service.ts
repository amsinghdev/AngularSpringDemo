import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class Message {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private http: HttpClient) { }

  getWelcomeService() {
      return this.http.get<Message>('http://localhost:8080/welcome');
  }

  getWelcomeServiceWithParam(name: string) {
    console.log('name..' + name)
    return this.http.get<Message>(`http://localhost:8080/welcome/${name}`);
  }
}
