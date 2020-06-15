import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WorklistComponent} from '../worklist/worklist.component';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {
  name = 'Default'
  welcomeMessage: string
  welcomeMessageWithParam: string
  errorMessage: string
  // Take the parameter from url
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessage() {
    this.welcomeDataService.getWelcomeService().subscribe(
      response => this.welcomeMessage = response.message,
      error => this.errorMessage = error);
  }

  getWelcomeMessageWithParam() {
    this.welcomeDataService.getWelcomeServiceWithParam(this.name).subscribe(
      response => this.welcomeMessageWithParam = response.message);
  }


}
