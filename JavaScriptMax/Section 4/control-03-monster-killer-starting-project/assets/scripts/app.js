//Global, hardcoded constant
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0;
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

// const enteredValue = prompt('Maximum life for you and the monster.', '100');

// lastLoggedEntry: initialize it with -1 ?
let lastLoggedEntry; // To keep track of displaying events, we wanna display one log per time
let battleLog = [];

/*
let chosenMaxLife = parseInt(enteredValue);
// If user entered invalid input (Value that cannot be converted
// to a number), parseInt() will return NaN;

// isNaN(): Checks if that is NOT a number
// or the user entered NOTHING  ...
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
  }
*/

function getMaxLifeValues() {
  const enteredValue = prompt('Maximum life for you and the monster.', '100');

  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    // we throw an object, most of errors in js is objects
    // message label
    /*
      keyword which throws a new error and an error can be anything, you can throw a number as an error, a string

      or an object

      and here I'll throw an object with a message property,

      and here I'll throw an object with a message property,

      "that's kind of the convention" , most errors are objects that have a message property where I say invalid

      user input, not a number,

    */
    // Obj {key: value};
    throw { message: 'Invalid user input, not a number!' };
  }
  return parsedValue;
}
let chosenMaxLife;

try {
  chosenMaxLife = getMaxLifeValues();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('You entered something wrong, default value of 100 was used.');
  // throw error;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true; // Boolean variables: hasLife, isLogged

adjustHealthBars(chosenMaxLife);

/*
you could totally create that function without 
any if checks if log entry is always created in the same
way with dynamic data that changes when you call the function
*/

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  // monsterHealth parameter Note: 151
  if (event === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
    /*
        so only add a new property dynamically which you can do in Javascript with the dot notation

        if you access a property which doesn't exist yet,

        this will add it dynamically.

        So you could do that and save even more code,

    */
    //battleLog.push(logEntry);
  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
    // battleLog.push(logEntry);
  } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: event,
      value: value,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
    // battleLog.push(logEntry);
  } else if (event === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: event,
      value: value,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  } else if (event === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER Won!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW!',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  /*
  // #### Note 141 below

  if (
    (currentMonsterHealth <= 0 && currentPlayerHealth > 0) ||
    (currentPlayerHealth <= 0 && currentMonsterHealth > 0) ||
    (currentPlayerHealth <= 0 && currentMonsterHealth <= 0)
  ) {
    reset();
  }
  */
  // Shorter way
  // the only thing we care about here is whether the monster or the player health is below zero,
  // if that yields true because that means we have a winner or we have a draw,
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset(); // we restart the game when it's over
  }
}

function attackMonster(mode) {
  // Refining the below code
  // We switched the maxDamage & logEvent from let to const because we
  // won't alter them again
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;

  // let maxDamage;
  // let logEvent;

  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

// functionnameHandler (-Handler) 'Handler Convention'
// We use a naming convention to make clear which functions are
//attached to an EventListener

// There are also another convention which is onClick, onName, et cetra
function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't heal to more than your max initial health.");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );

  endRound();
}

function printLogHandler() {
  for (let i = 0; i < 3; i++) {
    console.log('-------------------');
  }

  let j = 0;
  outerWhile: do {
    console.log('Outer', j);
    for (let k = 0; k < 5; k++) {
      if (k === 3) {
        // Stopping the outer loop when this condition is met
        // break outerWhile;
        // continue outerWhile; // Dangerous1 => results in infinite loop.
        //                                    => did create an infinite loop.
      }
      console.log('Inner', k);
    }
  } while (++j < 3);

  ///////////////////////////////////////////////

  ///////////////////////////////////////////////

  ///////////////////////////////////////////////

  // let j = 0;
  // while (j++ < 3) {
  //   console.log('-------------------');
  // }

  // for (let i = 10; i > 0;) {
  //   i--;
  //   console.log(i);
  // }

  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }

  // console.log(battleLog);

  // for of loop works for arrays & strings
  // which someKind of array of characters

  // Experimenting the for of loop
  // Identifying the INDEX of the element

  // let i = 0; // Creaing a counter Manually;
  // for (const logEntry of battleLog) {
  //   // Note that battleLog is an array of objects
  //   // So, logEntry is object
  //   console.log(logEntry);
  //   console.log(i);
  //   i++;

  //   /*
  //       // We could use const and let, but the first one is better;

  //       So behind the scenes, Javascript will create a brand new constant

  //       for every loop iteration not alter

  //       the previous one but create a new one and

  //       therefore you can use const because it will never be altered,

  //       it will just be recreated,
  //   */
  // }

  // Nesting for in loop inside the for of
  let i = 0;
  for (const logEntry of battleLog) {
    // !lastLoggedEntry: undifined or falsy value
    /*
    So if this is falsy but it's also not falsy ( 0 is falsy val => !0 yields true)
    because it's equal to zero or last logged entry simply
    is smaller than i,then we want to log something.
    */
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        // console.log(key);
        // console.log(logEntry[key]);

        // Refactoring the above 2 lines to facilitates
        // readability
        console.log(`${key} ===> ${logEntry[key]}`);
        // console.log('\n------------\n');
        //  console.log(logEntry['event']); // hardcode the key name
        //  to access its value, it should be string or
        //  a vaqriable tha holds the property name you want to access
      }
      lastLoggedEntry = i;
      break;
    }

    i++;
    console.log('\n------------\n');
    console.log('\n------------\n');
    console.log('\n------------\n');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

/*
Note:141

I wanted to show this first to practice the combination of and and or. In the end,

the only thing we care about here is whether the monster or the player
 health is below zero,

right,

because in either way one or the two lost or it's a draw 
but we don't care whether it's a draw or if we

have a winner here,

we just care whether some value, some health is below zero 
because that means the game is certainly over,

no matter who won or if it's a draw and therefore we want to reset.
 So we can shorten this a lot

and again then it becomes a real alternative to calling reset three times here.

We can shorten this a lot because all we have to do is, 
we have to check if the current monster health

is smaller or equal than zero

or if the currentPlayerHealth is smaller or equal than zero.
*/

/*
NOTE: 151
I also want to output the final monster health here and for that I

can access the current monster health,

alternatively we also expect this as an argument here which might be cleaner. We could use the global

variable but by using an internal parameter, we make this function a more pure function which only

works with data provided to it instead of also taking some global value which is always kind of dirty

or harder to follow if you're reading the code,

*/
