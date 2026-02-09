import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { SingletonTimerWorkerManager } from '../../workers/SingletonTimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import type { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatchAction] = useReducer(
    taskReducer,
    initialTaskState,
    () => {
      const storageState = localStorage.getItem('state');

      if (storageState === null) return initialTaskState;

      const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

      return {
        ...parsedStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
      };
    },
  );
  let playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

  const worker = SingletonTimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }
      dispatchAction({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatchAction({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }

    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatchAction }}>
      {children}
    </TaskContext.Provider>
  );
}
