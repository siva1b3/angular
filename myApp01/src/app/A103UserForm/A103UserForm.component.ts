import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface LoginResponse {
  isOk: boolean;
  // Add other properties if your response contains more data
}

@Component({
  selector: "A103UserForm",
  templateUrl: "./A103UserForm.component.html",
  styleUrls: ["./A103UserForm.component.scss"],
})
export class A103UserFormComponent implements OnInit {
  serverData: serverDataType = {
    usernameOrEmail: undefined,
    password: undefined,
    isLoggedIn: false,
    loginUrl: "http://localhost/login", // Assuming this is your API endpoint
  };

  useNotLoggedInState() {
    return this.serverData.isLoggedIn === false ? true : false;
  }

  constructor(private http: HttpClient) {}

  login() {
    const credentials = {
      usernameOrEmail: this.serverData.usernameOrEmail,
      password: this.serverData.password,
    };

    console.log(credentials);
  }

  ngOnInit() {}
}

type serverDataType = {
  usernameOrEmail?: string;
  password?: string;
  isLoggedIn: boolean;
  loginUrl: string;
};
