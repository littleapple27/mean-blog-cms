import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})

export class ActivityFeedComponent implements OnInit {
  title: string = "Recent Activity";
  constructor() { }

  ngOnInit(): void {
  }

}
