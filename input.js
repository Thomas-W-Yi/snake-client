// const { connect } = require('./client');
let connection;
let cannedMsg = ['myPrecious', 'uShallNotPass', 'pissOff'];
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {

    connection.write("Move: left");
  } else if (key === 's') {
    
    connection.write("Move: down");
 
  } else if (key === 'd') {
    
    connection.write("Move: right");

  } else if (key === '1') {
    connection.write(`Say: ${cannedMsg[0]}`);
  } else if (key === '2') {
    connection.write(`Say: ${cannedMsg[1]}`);
  } else if (key === '3') {
    connection.write(`Say: ${cannedMsg[2]}`);
  }
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);

  });
  return stdin;
};

module.exports = { setupInput };