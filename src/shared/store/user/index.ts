import {makeAutoObservable} from 'mobx';

class UserStore {
  currentUser = 'Mohamed';

  setUser(user: string) {
    this.currentUser = user;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default UserStore;
