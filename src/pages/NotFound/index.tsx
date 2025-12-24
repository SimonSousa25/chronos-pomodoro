import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eos,
          pariatur temporibus neque consectetur illo itaque repudiandae quae
          porro, corporis ad? Non quas officiis neque unde amet recusandae at
          quibusdam!
        </p>
      </Container>
    </MainTemplate>
  );
}
