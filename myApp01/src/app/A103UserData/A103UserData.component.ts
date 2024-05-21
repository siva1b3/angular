import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "A103UserData",
  templateUrl: "./A103UserData.component.html",
  styleUrls: ["./A103UserData.component.scss"],
})
export class A103UserDataComponent implements OnInit {
  formData: formDataType = {
    email: undefined,
    password: undefined,
  };

  private serviceData: serviceDataType = {
    isLoggedIn: false,
  };

  userNotLoggedIn() {
    return this.serviceData.isLoggedIn === false ? true : false;
  }

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      userName: this.formData.email,
      password: this.formData.password,
    };
    this.http.post("http://localhost:3000/api/auth/login", data).subscribe({
      next: (response: any) => {
        console.log("Response from Node:", response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  ngOnInit() {}
}

type formDataType = {
  email?: string;
  password?: string;
};

type serviceDataType = {
  isLoggedIn: boolean;
};
