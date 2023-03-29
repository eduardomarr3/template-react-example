import {
  FluidTheme,
  makeAutoObservable,
  makePersistable,
  runInAction,
  themeFormatter,
} from '~/modules';
import { RemoteConfigService } from '~/services';
import { animations, theme } from '~/theme';
import { REMOTE_CONFIG_KEYS } from '~/utils';

const themeJson: FluidTheme = {
  ...themeFormatter(theme),
  ...animations,
};

export default class ThemeStore {
  darkTheme: FluidTheme = themeJson;

  lightTheme: FluidTheme = themeJson;

  theme: FluidTheme = themeJson;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: this.constructor.name,
      properties: ['darkTheme', 'lightTheme', 'theme'],
    });
  }

  setDarkTheme = (): void => {
    runInAction(() => {
      this.theme = this.darkTheme;
    });
  };

  setLightTheme = (): void => {
    runInAction(() => {
      this.theme = this.lightTheme;
    });
  };

  fetchTheme = async (): Promise<void> => {
    await RemoteConfigService.fetch();
    const themeLightResponse = await RemoteConfigService.getValueJson(
      REMOTE_CONFIG_KEYS.theme_light,
    );
    const themeDarkResponse = await RemoteConfigService.getValueJson(
      REMOTE_CONFIG_KEYS.theme_dark,
    );
    const themeDarkFromJson: FluidTheme = {
      ...themeFormatter(themeDarkResponse),
      ...animations,
    };
    const themeFromJson: FluidTheme = {
      ...themeFormatter(themeLightResponse),
      ...animations,
    };

    runInAction(() => {
      this.darkTheme = themeDarkFromJson;
      this.lightTheme = themeFromJson;
      this.theme = themeFromJson;
    });
  };
}
