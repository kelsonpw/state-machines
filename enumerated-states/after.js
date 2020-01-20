const { Machine, interpret } = require('xstate');

const lightBulbMachine = Machine({
  id: 'lightbulb',
  initial: 'unlit',
  states: {
    lit: { on: { TOGGLE: 'unlit', BREAK: 'broken' } },
    unlit: { on: { TOGGLE: 'lit', BREAK: 'broken' } },
    broken: {},
  },
});

const lightBulb = interpret(lightBulbMachine)
  .onTransition(state => console.log(state.value))
  .start();

lightBulb.send('TOGGLE');
lightBulb.send('TOGGLE');
lightBulb.send('TOGGLE');
lightBulb.send('TOGGLE');
lightBulb.send('BREAK');
lightBulb.send('TOGGLE');
