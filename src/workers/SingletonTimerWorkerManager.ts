let instance: SingletonTimerWorkerManager | null = null;

export class SingletonTimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new SingletonTimerWorkerManager();
    }

    return instance;
  }

  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(callback: (event: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
