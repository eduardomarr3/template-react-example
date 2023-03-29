import { AuthApi } from '~/api';
import { makeAutoObservable, makePersistable, runInAction } from '~/modules';
import { StorageService } from '~/services';
import { RootStore } from '~/stores';

const userDataJson = {
  id: 1,
  name: '',
  email: '',
};

export default class UserStore {
  userData: User = userDataJson;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    makePersistable(this, {
      name: this.constructor.name,
      properties: ['userData'],
    });
    this.rootStore = rootStore;
  }

  get getUserEmail(): string {
    return this.userData.email;
  }

  // Combining multiple stores
  get getUserTodos(): Todo[] {
    const { todo } = this.rootStore;
    return todo.todosList.filter((todo) => todo.userId === this.userData.id);
  }

  login = async (credentials: Credentials): Promise<void> => {
    const fakeToken = { access_token: 'token' };
    StorageService.setToken(fakeToken); // just for route testing
    const token = await AuthApi.login(credentials);
    StorageService.setToken(token);
  };

  logout = (): void => {
    runInAction(() => {
      this.userData = userDataJson;
      StorageService.clearWholeStorage();
    });
  };
}
