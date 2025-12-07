import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1
        <button>
          <TimerIcon />
        </button>
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
