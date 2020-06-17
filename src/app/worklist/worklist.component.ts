import { Component, OnInit } from '@angular/core';
import {WorklistService} from '../service/data/worklist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {
  message: string;
  worklist: Work[];

  constructor(private worklistService: WorklistService, private router: Router) { }

  ngOnInit() {
    // this.worklist = [
    //   new WorkComponent(1, 'Dancing', new Date(), false),
    //   new WorkComponent(2, 'Swimming', new Date(), true),
    //   new WorkComponent(3, 'Badminton', new Date(), false),
    //   new WorkComponent(4, 'Football', new Date(), true)
    // ];
    this.loadDataFromServer();
  }

  loadDataFromServer() {
    this.worklistService.getWorkList('Admin').subscribe(
      data => {
        this.worklist = data;
      }
    );
  }
  deleteWork(id: number) {
    this.worklistService.deleteById('Admin', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Work ${id} successful`;
      }
    );
    this.loadDataFromServer();
  }

  updateWork(id: number) {
    this.router.navigate(['work', id]);
  }

  addWork() {
    this.router.navigate(['work']);
  }

}

export class Work {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {

  }
}

