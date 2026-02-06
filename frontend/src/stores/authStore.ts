import { makeAutoObservable } from "mobx";

class AuthStore {
  private _isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }
}

const authStore = new AuthStore();
export default authStore;
