import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

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

  userLoggedIn() {
    return this.serviceData.isLoggedIn;
  }

  async onSubmit() {
    const data = {
      userName: this.formData.email,
      password: this.formData.password,
    };

    try {
      // First API call
      const loginResponse: any = await firstValueFrom(
        this.http.post<authResponseType>(
          "http://localhost:4300/api/auth/login",
          data
        )
      );
      console.log("Response from Node:", loginResponse);

      // Check if isSucess is true before making the second API call
      if (loginResponse.isSucess) {
        const countriesResponse: any = await firstValueFrom(
          this.http.get(
            "http://localhost:3000/api/countries/getAllLoactionData"
          )
        );
        console.log("Response from countries:", countriesResponse);
      } else {
        console.log("Login was not successful");
      }
    } catch (error) {
      console.log(error);
    }
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

type authResponseType = {
  isAuthSucess: boolean;
};
