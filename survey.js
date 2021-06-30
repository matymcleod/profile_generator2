const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let survey = [];
rl.question('What is you name? ', (name) => {
  survey.push(`You answered that your name is: ${name}`)
    rl.question('How old are you? ', (answer) => {
      survey.push(`You are: ${answer}`)
        rl.question('Do you like participating in surveys? ', (answer => {
          survey.push(`You said that you ${answer} like participating in surveys`)
            console.log(`Thank you for your valuable feedback ${name}, here are your responses: ${survey}`);
              rl.close();
        }))
    })
});