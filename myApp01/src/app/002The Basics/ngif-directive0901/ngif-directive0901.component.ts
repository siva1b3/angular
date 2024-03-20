import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngif-directive0901',
  templateUrl: './ngif-directive0901.component.html',
  styleUrls: ['./ngif-directive0901.component.css']
})
export class NgifDirective0901Component implements OnInit {

  userName: string | undefined = undefined

  isUserNameSubmitted: boolean = false
  isButtonEnabled = !this.userName

  constructor() {
  }

  submitUserName(): void {
    this.isUserNameSubmitted = true
  }

  resetUserName() {
    this.isUserNameSubmitted = false
    this.userName = undefined
  }


  ngOnInit(): void {
  }

}
