import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
  
export class EventsComponent implements OnInit {
  title: string = "Event Management";
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
