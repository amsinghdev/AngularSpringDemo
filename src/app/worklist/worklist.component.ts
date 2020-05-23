import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.css']
})
export class WorklistComponent implements OnInit {

  worklist: WorkComponent[];

  constructor() { }

  ngOnInit() {
    this.worklist = [
      new WorkComponent(1, 'Dancing', new Date(), false),
      new WorkComponent(2, 'Swimming', new Date(), true),
      new WorkComponent(3, 'Badminton', new Date(), false),
      new WorkComponent(4, 'Football', new Date(), true)
    ];
  }

}

export class WorkComponent {
  constructor(
    public id: number,
    public details: string,
    public target: Date,
    public isComplected: boolean
  ) {

  }
}

