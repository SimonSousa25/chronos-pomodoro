import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { SingletonTimerWorkerManager } from '../../workers/SingletonTimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatchAction] = useReducer(taskReducer, initialTaskState);

  const worker = SingletonTimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log('Worker COMPLETED');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
    }

    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatchAction }}>
      {children}
    </TaskContext.Provider>
  );
}
