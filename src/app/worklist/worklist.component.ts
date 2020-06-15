import { Component, OnInit } from '@angular/core';
import {WorklistService} from '../service/data/worklist.service';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {
  work: any;
  worklist: WorkComponent[];

  constructor(private worklistService: WorklistService) { }

  ngOnInit() {
    // this.worklist = [
    //   new WorkComponent(1, 'Dancing', new Date(), false),
    //   new WorkComponent(2, 'Swimming', new Date(), true),
    //   new WorkComponent(3, 'Badminton', new Date(), false),
    //   new WorkComponent(4, 'Football', new Date(), true)
    // ];
    this.worklistService.getWorkListService('Admin').subscribe(
      data => {
        this.worklist = data;
      }
    );
  }

}

export class WorkComponent {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {

  }
}

