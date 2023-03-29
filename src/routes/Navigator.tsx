import React, { useLayoutEffect, useState } from 'react';
import { BrowserHistory } from 'history';
import { Router } from 'react-router-dom';

type Props = {
  history: BrowserHistory;
  children: React.ReactNode;
};

const Navigator: React.FC<Props> = ({ history, children, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default Navigator;
