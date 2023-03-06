import {makeAutoObservable} from 'mobx';

class CountStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }
  increment(number: number) {
    this.count = number;
  }
  decrement(number: number) {
    this.count = number;
  }
  get getCount() {
    return this.count;
  }
}

export default CountStore;
