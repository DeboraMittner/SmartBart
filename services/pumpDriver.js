if (process.env.NODE_ENV == 'production') {
  var rpio = require("rpio");

  const pump1GPIO = 26;
  const pump2GPIO = 19;
  const pump3GPIO = 13;
  const pump4GPIO = 6;
  const pump5GPIO = 5;
  const pump6GPIO = 12;

  rpio.open(pump1GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.open(pump2GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.open(pump3GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.open(pump4GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.open(pump5GPIO, rpio.OUTPUT, rpio.LOW);
  rpio.open(pump6GPIO, rpio.OUTPUT, rpio.LOW);
}



function runPump(pump, duration) {
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
    rpio.write(gpio, rpio.HIGH);
    rpio.sleep(duration);
    rpio.write(gpio, rpio.LOW);
  }
}
module.exports = { runPump };