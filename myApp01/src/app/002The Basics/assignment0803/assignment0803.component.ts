import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment0803',
  templateUrl: './assignment0803.component.html',
  styleUrls: ['./assignment0803.component.css']
})
export class Assignment0803Component implements OnInit {

  userName: string | undefined | null = null

  constructor() {
  }

  checkUserName(): boolean {
    if (this.userName === "" || this.userName === undefined || this.userName === null) {
      return true;
    }
    return false;
  }

  resetUserName() {
    this.userName = null
  }

  ngOnInit(): void {
  }

}
