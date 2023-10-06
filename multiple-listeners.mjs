import { EventEmitter } from 'events';

const CUSTOM = 'custom';
const OTHER = 'other';

const eventEmitter = new EventEmitter();

eventEmitter.on(CUSTOM, () => console.log('First event listener'));

eventEmitter.on(CUSTOM, () => console.log('Second event listener'));

eventEmitter.on(OTHER, () => console.log('Other event listener'));

eventEmitter.emit(CUSTOM);

eventEmitter.emit(OTHER);

console.log(eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(25);

console.log(eventEmitter.getMaxListeners());

console.log(eventEmitter.eventNames());
