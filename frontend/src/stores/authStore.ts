import { makeAutoObservable } from "mobx";
import type { AuthenticatedUser } from "../schemas/zodUser";

class AuthStore {
  _id: string | null = null;
  _userEmail: string | null = null;
  _accessToken: string | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
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
}

export const authStore = new AuthStore();
