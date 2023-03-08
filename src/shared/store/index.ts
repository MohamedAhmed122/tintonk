import CountStore from './count';
import UserStore from './user';

class RootStore {
  UserStore: UserStore;
  CountStore: CountStore;

  constructor() {
    this.UserStore = new UserStore();
    this.CountStore = new CountStore();
  }
}

export default new RootStore();
