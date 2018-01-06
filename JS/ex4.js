const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var store = []
rl.question('What is your number? ', (answer) => {
    var num = parseInt(answer)
    for (i = 1; i < num+1; i++) {
        if  ((num % i) === 0) {
            store.push(i)
        }
    }
    console.log(store)
    process.exit(0)
})