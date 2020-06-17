import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Work} from '../../worklist/worklist.component';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {

  constructor(private http: HttpClient) { }

  getWorkList(username: string) {
    return this.http.get<Work[]>( `http://localhost:8080/users/${username}/worklist`);
  }

  deleteById(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/worklist/${id}`);
  }

  getWorkById(username: string, id: number) {
    return this.http.get<Work>(`http://localhost:8080/users/${username}/worklist/${id}`);
  }

  updateWork(username: string, id: number, work: Work) {
    console.log('work id..' + id + 'work details...' + work.description);
    return this.http.put(`http://localhost:8080/users/${username}/worklist/${id}`, work);
  }

  addWork(username: string, work: Work) {
    console.log('work details...' + work.description);
    return this.http.post(`http://localhost:8080/users/${username}/worklist`, work);
  }
}
