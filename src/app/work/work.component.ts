import { Component, OnInit } from '@angular/core';
import {WorklistService} from '../service/data/worklist.service';
import {Work} from '../worklist/worklist.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
 id: number;
 work: Work;
  constructor(private worklistService: WorklistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.work = new Work(0, 'dumy', 'dumy data desc', new Date(), false);
    this.id = this.route.snapshot.params.id;
    this.worklistService.getWorkById('Admin', this.id).subscribe(
      data => this.work = data
    );
  }

  saveWork() {
    console.log('in update work...');
    if ( this.id !== undefined) {
      this.worklistService.updateWork('Admin', this.id, this.work).subscribe(
        data => {
          console.log(data);
        }
      );
    } else {
      this.worklistService.addWork('Admin', this.work).subscribe(
        data => {
          console.log(data);
        }
      );
    }
  }

}
