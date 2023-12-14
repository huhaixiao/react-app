import EventEmitter from "eventemitter3";

const EE = new EventEmitter();
const context = { foo: "bar" };

function emitted(this: Record<string, string>) {
  console.log(this === context); // true
}

EE.once('event-name', emitted, context);
EE.on('another-event', emitted, context);
EE.removeListener('another-event', emitted, context);
