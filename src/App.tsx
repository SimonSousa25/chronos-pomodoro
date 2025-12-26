import { Home } from './pages/Home';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

import type { TaskStateModel } from './models/TaskStateModel';

// export type TaskStateModel = {
//   tasks: TaskModel[]; // histórico, MainForm
//   secondsRemaining: number; // CountDown, Histórico, MainForm, Button
//   formattedSecondsRemaining: string; // Título, CountDown
//   activeTask: TaskModel | null; // // CountDown, Histórico, MainForm, Button
//   currentCycle: number; // Home
//   config: {
//     workTime: number; // MainForm
//     shortBreakTime: number; // MainForm
//     longBreakTime: number; // MainForm
//   };
// };

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

export function App() {
  const [state, setState] = useState(initialState); // -> Aqui o typescript faz uma inferência de tipos para esse useState()

  return <Home state={state} setState={setState} />;
}
