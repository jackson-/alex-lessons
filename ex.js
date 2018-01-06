const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your number? ', (answer) => {
  var num = null
  try {
    var num = parseInt(answer) 
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
  if ((answer % 2 ) === 0) {
      console.log("This is even")
  }else {
    console.log("This is odd")
  }
  console.log(num);
  process.exit(0)
});
