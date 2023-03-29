import { configurePersistable } from '~/modules';
import ThemeStore from './theme.store';
import TodoStore from './todo.store';
import UserStore from './user.store';

class RootStore {
  theme: ThemeStore;

  user: UserStore;

  todo: TodoStore;

  constructor() {
    this.theme = new ThemeStore();
    this.user = new UserStore(this);
    this.todo = new TodoStore();
  }
}

configurePersistable({
  debugMode: false,
  storage: localStorage,
});

const rootStore = new RootStore();

export { ThemeStore, TodoStore, UserStore, RootStore };
export default rootStore;
