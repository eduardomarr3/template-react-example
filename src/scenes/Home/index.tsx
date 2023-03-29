import React, { FC } from 'react';
import { observer, useNavigate } from '~/modules';
import { Routes } from '~/routes';
import { useStores } from '~/utils';
import Home from './Home';

const HomeContainer: FC = () => {
  const { user, todo } = useStores();
  const navigate = useNavigate();

  const onAddUserTodo = (): void => {
    todo.add({
      id: 1,
      userId: 1,
      title: 'Novo ToDo',
      text: 'Novo texto',
      done: false,
    });

    console.log('getUserTodos', user.getUserTodos);
  };

  const handleLogout = (): void => {
    user.logout();
    navigate(Routes.LOGIN);
  };

  return <Home handleLogout={handleLogout} onAddUserTodo={onAddUserTodo} />;
};

export default observer(HomeContainer);
