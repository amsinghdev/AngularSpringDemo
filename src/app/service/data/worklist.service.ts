import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkComponent} from '../../worklist/worklist.component';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  constructor(private http: HttpClient) { }

  getWorkListService(username: string) {
    return this.http.get<WorkComponent[]>( `http://localhost:8080/users/${username}/worklist`);
  }
}
