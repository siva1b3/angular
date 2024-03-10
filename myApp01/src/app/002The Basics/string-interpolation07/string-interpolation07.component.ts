import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-string-interpolation07',
  templateUrl: './string-interpolation07.component.html',
  styleUrls: ['./string-interpolation07.component.css']
})
export class StringInterpolation07Component implements OnInit {

  serverId: number = 10
  serverName: string = "Siva"
  serverStatus: string | number | boolean = true

  constructor() {
  }

  getserverIpAddress() {
    return "10.0.66.666"
  }

  ngOnInit(): void {
  }

}
