const { connect } = require('./client');

console.log('Connecting ...');
let conn = connect();
conn.on('connect', () => {
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 50);
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  
});

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};
setupInput();