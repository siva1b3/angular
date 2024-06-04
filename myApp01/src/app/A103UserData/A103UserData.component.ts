import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "A103UserData",
  templateUrl: "./A103UserData.component.html",
  styleUrls: ["./A103UserData.component.scss"],
})
export class A103UserDataComponent implements OnInit {
  loginCredentials: LoginData = {
    email: undefined,
    password: undefined,
  };

  authResponse: AuthResponse = {};

  private appState: AppState = {
    isLoggedIn: JSON.parse(sessionStorage.getItem("isLoggedIn") || "false"),
    isInitialLoginViewVisible: JSON.parse(
      sessionStorage.getItem("isInitialLoginViewVisible") || "true"
    ),
    isWrongCredentials: JSON.parse(
      sessionStorage.getItem("isWrongCredentials") || "false"
    ),
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  isUserNotLoggedIn() {
    return !this.appState.isLoggedIn;
  }

  isUserLoggedIn() {
    return this.appState.isLoggedIn;
  }

  isInitialLoginView() {
    return this.appState.isInitialLoginViewVisible;
  }

  resetLogin() {
    this.appState.isLoggedIn = false;
    this.appState.isInitialLoginViewVisible = true;
    this.appState.isWrongCredentials = false;
    this.clearLoginForm();
    this.updateSessionStorage();
  }

  handleLogout() {
    this.resetLogin();
  }

  updateSessionStorage() {
    sessionStorage.setItem(
      "isLoggedIn",
      JSON.stringify(this.appState.isLoggedIn)
    );
    sessionStorage.setItem(
      "isInitialLoginViewVisible",
      JSON.stringify(this.appState.isInitialLoginViewVisible)
    );
    sessionStorage.setItem(
      "isWrongCredentials",
      JSON.stringify(this.appState.isWrongCredentials)
    );
  }

  async handleLogin() {
    const loginPayload = {
      userName: this.loginCredentials.email,
      password: this.loginCredentials.password,
    };

    try {
      const loginResponse: AuthResponse = await firstValueFrom(
        this.http.post<AuthResponse>(
          "http://localhost:4300/api/auth/login",
          loginPayload
        )
      );

      if (loginResponse.isAuth) {
        this.appState.isLoggedIn = true;
        this.appState.isInitialLoginViewVisible = false;
        this.appState.isWrongCredentials = false;
        this.authResponse = { ...loginResponse };
        console.log(this.authResponse);

        this.clearLoginForm();
      } else {
        this.appState.isLoggedIn = false;
        this.appState.isInitialLoginViewVisible = false;
        this.appState.isWrongCredentials = true;
      }
      this.updateSessionStorage();
      if (loginResponse.isAuth) {
        await this.fetchAllLocations();
      }
    } catch (error) {
      console.error(error);
    }
  }

  clearLoginForm() {
    this.loginCredentials.email = undefined;
    this.loginCredentials.password = undefined;
  }

  async fetchAllLocations(): Promise<void> {
    try {
      const locationsResponse: any = await firstValueFrom(
        this.http.get("http://localhost:4300/api/locations/getAllLocations")
      );
      console.log("Response from locations API:", locationsResponse);
    } catch (error) {
      console.error(error);
    }
  }
}

interface LoginData {
  email?: string;
  password?: string;
}

interface AppState {
  isLoggedIn: boolean;
  isInitialLoginViewVisible: boolean;
  isWrongCredentials: boolean;
}

interface UserInfo {
  Age?: number;
  Email?: string;
  EmployeeID?: number;
  FullName?: string;
  Gender?: string;
}

interface AuthResponse extends UserInfo {
  isAuth?: boolean;
}
