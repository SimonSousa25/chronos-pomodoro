import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/container';
import { Logo } from './components/logo';
import { Menu } from './components/menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}
