const assert = require('assert');
var cocktails = [{ "id": 0, "name": "Cuba Libre", "ingredients": { "rum": 60, "coke": 240 } }, { "id": 1, "name": "Long Island", "ingredients": { "gin": 50, "vodka": 50, "rum": 50, "coke": 150 } }, { "id": 2, "name": "Screwdriver", "ingredients": { "vodka": 60, "osaft": 240 } }, { "id": 3, "name": "Firework", "ingredients": { "vodka": 60, "eistee": 240 } }, { "name": "adada", "ingredients": { "gin": 40 }, "id": 40 }, { "name": "adada", "ingredients": { "gin": 60, "vodka": 100 }, "id": 99 }, { "name": "sdfsdf", "ingredients": { "gin": 60, "coke": 80 }, "id": 83 }];
var mixer = require('./services/mixer');



it('correctly gets the cocktail out of a cocktail list', () => {
  assert.deepEqual(mixer._getCocktail(1), cocktails[1]);
})

it('correctly gets the pumps from a cocktail', () => {
  assert.deepEqual(mixer._getPumps(cocktails[1]), [[{ pump: 0, name: 'gin', alcohol: true }, 50],
  [{ pump: 1, name: 'rum', alcohol: true }, 50],
  [{ pump: 2, name: 'coke', alcohol: false }, 150],
  [{ pump: 3, name: 'vodka', alcohol: true }, 50]])
})

it('correctly calculates the amount of liquid for low alcohol', () => {
  assert.deepEqual(mixer._calculateTime(1, [[{ pump: 0, name: 'gin', alcohol: true }, 50],[{ pump: 1, name: 'rum', alcohol: true }, 50],[{ pump: 2, name: 'coke', alcohol: false }, 150],[{ pump: 3, name: 'vodka', alcohol: true }, 50]]),
  [ [ { pump: 0, name: 'gin', alcohol: true }, 21 ],
[ { pump: 1, name: 'rum', alcohol: true }, 21 ],
[ { pump: 3, name: 'vodka', alcohol: true }, 21 ],
[ { pump: 2, name: 'coke', alcohol: false }, 117 ] ])
})

it('correctly calculates the amount of liquid for medium alcohol', () => {
  assert.deepEqual(mixer._calculateTime(2, [[{ pump: 0, name: 'gin', alcohol: true }, 50],[{ pump: 1, name: 'rum', alcohol: true }, 50],[{ pump: 2, name: 'coke', alcohol: false }, 150],[{ pump: 3, name: 'vodka', alcohol: true }, 50]]),
  [ [ { pump: 0, name: 'gin', alcohol: true }, 30 ],
[ { pump: 1, name: 'rum', alcohol: true }, 30 ],
[ { pump: 3, name: 'vodka', alcohol: true }, 30 ],
[ { pump: 2, name: 'coke', alcohol: false }, 90 ] ])
})

it('correctly calculates the amount of liquid for high alcohol', () => {
  assert.deepEqual(mixer._calculateTime(3, [[{ pump: 0, name: 'gin', alcohol: true }, 50],[{ pump: 1, name: 'rum', alcohol: true }, 50],[{ pump: 2, name: 'coke', alcohol: false }, 150],[{ pump: 3, name: 'vodka', alcohol: true }, 50]]),
  [ [ { pump: 0, name: 'gin', alcohol: true }, 36 ],
[ { pump: 1, name: 'rum', alcohol: true }, 36 ],
[ { pump: 3, name: 'vodka', alcohol: true }, 36 ],
[ { pump: 2, name: 'coke', alcohol: false }, 72 ] ])
})