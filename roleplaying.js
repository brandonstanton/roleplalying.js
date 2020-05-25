const readlineSync = require('readline-sync');

const name = readlineSync.question("What is your name");

readlineSync.question('Hello ' + name +' , Welcome to DESTRUCTION! If you are afraid, then this game is not for you! Press Enter to Begin! ');

const rivalOponents = ['Zombie Slayer', 'Chucky Doll', 'The Executioner'];
const treasure = ['Mini Gun', 'Gem Stone Healer', 'Grenade', 'Healing Sheild'];
var award = [];
let userHealth = 50;
const options = ['Walk', 'Exit', 'Print'];
let pickUP = treasure[Math.floor(Math.random()*treasure.length)];

function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const rivalOponents = rivalOponents[Math.floor(Math.random() * rivalOponents.length)];
    let rivalOponents = 50;
    const rivalOponentsPower = Math.floor(Math.random() * (5 - 3 + 2) + 5)

    const index = readlineSync.keyInSelect(options, 'What is your next move?');

    if (options[index] == 'Exit') {
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nTreasure: ' + pickUp);
    } else if (options[index] == 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking.....');
        }else if (key >= .3) {
            console.log(rivalOponents + ' showed up. ');

            while(rivalOponents > 0 && userHealth > 0) {
                const user = readlineSync.question('What is your next move? enter "r" to run or "a" to attack: ')

            switch (user){
                case 'r': //run
                    const run = Math.random()
                    if(run < .5){
                        console.log(' Before you can run away ' + badguy + ' attaks you with: ' + rivalOponentsPower);
                    } else {
                        console.log('You Ran Away!!!');
                        break;
                    }
                
                case 'a':
                    //attack the enemy
                    rivalOponentsHealth -= attackPower;
                    console.log('You attacked ' + rivalOponents + ' with ' + attackPower + ' attack power ' );

                    userHealth -= rivalOponentsPower;
                    console.log('Enemy just attacked you with: ' + rivalOponentsPower + ' attack power');

                    if (rivalOponentsHealth <= 0){
                        console.log('You Killed ' + rivalOponents + ' .\n' + rivalOponents + 'left: ' + pickup);
                        let loot = Math.random();
                        if (loot <= .3){
                            prize.push(pickUP);
                        }

                    } else if(userHealth <= 0){
                        console.log(rivalOponents + ' has defeated you. You are now DEAD. ');
                    }
                }
           } 
      }
    }
}

while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}
