import { Provider } from 'mobx-react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HeadHTML } from './components';
import reportWebVitals from './reportWebVitals';
import { GoogleTagManager, SentryService } from './services';
import * as serviceWorker from './serviceWorker';
import store from './stores';
import { ENV } from './utils';

import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

if (ENV === 'PRD') {
  SentryService.init();
  GoogleTagManager.init();
}

root.render(
  <Provider rootStore={store}>
    <HeadHTML />
    <App />
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
