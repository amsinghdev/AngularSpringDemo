import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WorklistComponent} from '../worklist/worklist.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = 'Default'
  // Take the parameter from url
  constructor(private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  navWorkList() {
    this.router.navigate(['worklist']);
  }

}
