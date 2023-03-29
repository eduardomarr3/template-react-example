import React, { FC, useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import { RemoteConfigService } from '~/services';
import { ThemeStore } from '~/stores';
import { theme as themeJson } from '~/theme';

type Props = {
  themeStore: ThemeStore;
  children: React.ReactNode;
};

const ThemeProviderContainer: FC<Props> = ({ children, themeStore }) => {
  const fetchTheme = useCallback(() => {
    RemoteConfigService.setup({
      theme_dark: JSON.stringify(themeJson),
      theme_light: JSON.stringify(themeJson),
    });
    themeStore.fetchTheme();
  }, [themeStore]);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return <ThemeProvider theme={themeStore.theme}>{children}</ThemeProvider>;
};

export default observer(ThemeProviderContainer);
