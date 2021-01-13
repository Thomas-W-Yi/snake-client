const { connect } = require('./client');
const { setupInput } = require('./input');

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

setupInput(conn);
