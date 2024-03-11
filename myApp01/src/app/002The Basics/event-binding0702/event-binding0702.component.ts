import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-binding0702',
  templateUrl: './event-binding0702.component.html',
  styleUrls: ['./event-binding0702.component.css']
})
export class EventBinding0702Component implements OnInit {
  constructor() {
  }

  onClickButton(): void {
    const dataAndTime: Date = new Date();
    console.log(dataAndTime.toString());
    console.log(dataAndTime.getMilliseconds());
  }


  ngOnInit(): void {
  }

}
