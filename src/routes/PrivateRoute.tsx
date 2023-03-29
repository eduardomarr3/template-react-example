import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { If } from '~/components';
import { isEmpty } from '~/modules';
import { StorageService } from '~/services';
import { Routes } from './routing';

type Props = {
  children: JSX.Element;
};

const PrivateRoute: FC<Props> = ({ children }) => {
  const location = useLocation();
  const token = StorageService.getToken();

  return (
    <>
      <If condition={!isEmpty(token)}>{children}</If>
      <If condition={isEmpty(token)}>
        <Navigate to={Routes.LOGIN} state={{ from: location }} />
      </If>
    </>
  );
};

export default PrivateRoute;
