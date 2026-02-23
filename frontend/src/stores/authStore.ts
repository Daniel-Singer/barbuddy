import { makeAutoObservable } from "mobx";
import type { AuthenticatedUser } from "../schemas/zodUser";

class AuthStore {
  _id: string | null = null;
  _userEmail: string | null = null;
  _accessToken: string | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    const token = localStorage.getItem("authToken");
    if (token) {
      this._accessToken = token;
    }
  }

  onAuthSuccess(authenticatedUser: AuthenticatedUser) {
    this._id = authenticatedUser._id;
    this._userEmail = authenticatedUser.email;
    this._accessToken = authenticatedUser.accessToken;

    localStorage.setItem("authToken", authenticatedUser.accessToken);
  }

  get isAuthenticated() {
    return !!this._accessToken;
  }

  logout() {
    this._id = null;
    this._userEmail = null;
    this._accessToken = null;

    localStorage.removeItem("authToken");
  }

  get token() {
    return this._accessToken ?? localStorage.getItem("authToken");
  }
}

export const authStore = new AuthStore();
