import { FC } from 'react';
import { SceneWrapper } from '~/components';
import { ActionButton, Heading, Paragraph } from './styles';

type Props = {
  handleLogout(): void;
  onAddUserTodo(): void;
};

const Home: FC<Props> = ({ handleLogout, onAddUserTodo }) => (
  <SceneWrapper>
    <Heading>Home</Heading>
    <Paragraph>Hello</Paragraph>
    <ActionButton
      contrast={false}
      accessibility="botão para adicionar um ToDo"
      onPress={onAddUserTodo}
    >
      Adicionar ToDo
    </ActionButton>
    <ActionButton accessibility="botão de logout" onPress={handleLogout}>
      Logout
    </ActionButton>
  </SceneWrapper>
);

export default Home;
