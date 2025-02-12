'use strict';

const scenarios = require('./__testutils/scoreScenarios');

/*
const myscenarios = require('./scoreScenarios');
const scenarios = [myscenarios[3]];
*/

const {
  scoreGame
} = require('./bowling');

describe('validateGame', () => {
  scenarios.forEach((scenario, idx) => {    
    it(`Should return expected score ${scenario.score} for scenario ${idx}`, () => {
      expect(scoreGame(scenario.input)).toEqual(scenario.score);
    });
  });
});
