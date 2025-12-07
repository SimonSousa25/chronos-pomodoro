import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi
        perspiciatis aliquid esse magni facilis, corporis enim, voluptas
        repellendus itaque fuga reiciendis ipsum nisi! Eligendi, provident
        nulla? Sapiente, maxime molestiae.
      </p>
    </>
  );
}
