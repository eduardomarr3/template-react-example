import { makeAutoObservable, runInAction } from '~/modules';

export default class TodoStore {
  todosList: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get pending() {
    return this.todosList.filter((todo) => !todo.done);
  }

  get done() {
    return this.todosList.filter((todo) => todo.done);
  }

  add = (todo: Todo) => {
    runInAction(() => {
      this.todosList.push(todo);
    });
  };
}
