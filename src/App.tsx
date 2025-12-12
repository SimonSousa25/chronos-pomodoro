import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading';
import { Container } from './components/container';
import { Logo } from './components/logo';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
