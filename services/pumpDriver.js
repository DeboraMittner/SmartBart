const pump1GPIO = 37;
const pump2GPIO = 35;
const pump3GPIO = 33;
const pump4GPIO = 31;
const pump5GPIO = 29;
const pump6GPIO = 32;


if (process.env.NODE_ENV == 'production') {
  var rpio = require("rpio");

  rpio.open(pump1GPIO, rpio.OUTPUT, rpio.HIGH);
  rpio.open(pump2GPIO, rpio.OUTPUT, rpio.HIGH);
  rpio.open(pump3GPIO, rpio.OUTPUT, rpio.HIGH);
  rpio.open(pump4GPIO, rpio.OUTPUT, rpio.HIGH);
  rpio.open(pump5GPIO, rpio.OUTPUT, rpio.HIGH);
  rpio.open(pump6GPIO, rpio.OUTPUT, rpio.HIGH);
}



async function runPump(pump, duration) {
  console.log('run');
  var gpio;
  switch (pump) {
    case 0: {
      gpio = pump1GPIO;
      break;
    }
    case 1: {
      gpio = pump2GPIO;
      break;
    }
    case 2: {
      gpio = pump3GPIO;
      break;
    }
    case 3: {
      gpio = pump4GPIO;
      break;
    }
    case 4: {
      gpio = pump5GPIO;
      break;
    }
    case 5: {
      gpio = pump6GPIO;
      break;
    }
    default: {
      document.write("Diesen Cocktail gibt es nicht");
    }
  }

  if (process.env.NODE_ENV == 'production') {
    rpio.write(gpio, rpio.LOW);
    rpio.sleep(duration);
    rpio.write(gpio, rpio.HIGH);
  }
}
module.exports = { runPump };
