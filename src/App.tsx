import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { StylesProvider } from '@material-ui/core/styles';
import { Notifications, ScrollToTop } from '~/components';
import { Toastify } from '~/modules';
import Routes, { Navigator } from './routes';
import store from './stores';
import { ThemeProvider } from './theme';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './theme/global';

const browserHistory = createBrowserHistory();

const App: React.FC = () => (
  <Provider rootStore={store}>
    <ThemeProvider themeStore={store.theme}>
      <Navigator history={browserHistory}>
        <Toastify.ToastContainer />
        <Notifications />
        <ScrollToTop>
          <StylesProvider injectFirst>
            <Routes />
          </StylesProvider>
          <GlobalStyle theme={store.theme} />
        </ScrollToTop>
      </Navigator>
    </ThemeProvider>
  </Provider>
);

export { browserHistory };
export default App;
