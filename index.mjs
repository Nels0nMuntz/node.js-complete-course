import { EventEmitter } from 'events';

const TIMEOUT_EVENT = 'timeout';
const SINGLE_EVENT = 'single';

const eventEmitter = new EventEmitter();

const timeoutListener = (secondsQty) => {
  console.log(`Timeout event in ${secondsQty} seconds!`);
};

eventEmitter.on(TIMEOUT_EVENT, timeoutListener);

setTimeout(() => eventEmitter.emit(TIMEOUT_EVENT, 1), 1000);
setTimeout(() => eventEmitter.emit(TIMEOUT_EVENT, 2), 2000);
setTimeout(() => eventEmitter.emit(TIMEOUT_EVENT, 4), 4000);

eventEmitter.once(SINGLE_EVENT, () => {
  console.log('Single event occured');
});

setTimeout(() => eventEmitter.emit(SINGLE_EVENT, 1), 1000);
setTimeout(() => eventEmitter.emit(SINGLE_EVENT, 2), 2000);

setTimeout(() => eventEmitter.off(TIMEOUT_EVENT, timeoutListener), 3000);
