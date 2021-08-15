const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let newProfile = []
rl.question('What is your name? ', (answer) => {
  newProfile.push(answer);
  rl.question(`What's an activity you like doing? `, (answer) => {
    newProfile.push(answer);
    rl.question(`What do you listen while doing that? `, (answer) => {
      newProfile.push(answer);
      rl.question(`Which meal is your favorite(eg: dinner, brunch,etc) `, (answer) => {
        newProfile.push(answer);
        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          newProfile.push(answer);
          rl.question(`Which sport is your absolute favorite?`, (answer) => {
            newProfile.push(answer);
            rl.question(`What is your superpower? In a few words, tell us what your amazing at!`, (answer) => {
              newProfile.push(answer);
              console.log(`${newProfile[0]} loves listening to ${newProfile[2]} while ${newProfile[1]}, devouring ${newProfile[4]} for ${newProfile[3]}, prefers ${newProfile[5]} over any other sport, and is amazing at ${newProfile[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});