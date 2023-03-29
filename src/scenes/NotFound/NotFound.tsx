import { Subtitle, Title, Wrapper } from './styles';

const NotFound: React.FC = () => (
  <Wrapper title="Not Found">
    <Title>404</Title>
    <Subtitle>Woops. Parece que a página não existe.</Subtitle>
  </Wrapper>
);

export default NotFound;
