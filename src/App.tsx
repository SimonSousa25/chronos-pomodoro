import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/heading';
import { Container } from './components/container';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}
