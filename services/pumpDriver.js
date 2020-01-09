/*var rpio = require("rpio");
rpio.open(17, rpio.OUTPUT, rpio.LOW);
rpio.open(17, rpio.OUTPUT, rpio.LOW);
rpio.open(17, rpio.OUTPUT, rpio.LOW);
rpio.open(17, rpio.OUTPUT, rpio.LOW);
rpio.open(17, rpio.OUTPUT, rpio.LOW);
rpio.open(17, rpio.OUTPUT, rpio.LOW);
*/


function runPump(pump, duration) {
    var gpio;
  switch (pump) {
    case 0: {
      gpio = 16;
      break;
    }
    case 1: {
      gpio = 17;
      break;
    }
    case 2: {
      gpio = 18;
      break;
    }
    case 3: {
      gpio = 19;
      break;
    }
    case 4: {
      gpio = 20;
      break;
    }
    case 5: {
        gpio = 21;
        break;
      }
    default: {
      document.write("Diesen Cocktail gibt es nicht");
    }
  }

  /*
  rpio.write(gpio, rpio.HIGH);
  rpio.sleep(duration);
  rpio.write(gpio, rpio.LOW);
  */
}
module.exports = { runPump };