'use strict';

const {
  sampleAbsentSeasonInput,
  sampleAbsentSeasonOutput,
  sampleInvalidSeasonInput,
  sampleInvalidSeasonOutput,
  sampleMidrangeSeasonInput,
  sampleMidrangeSeasonOutput,
  samplePartTimeSeasonInput,
  samplePartTimeSeasonOutput,
  samplePerfectSeasonInput,
  samplePerfectSeasonOutput,
} = require('./__testutils/leagueScoreScenarios');

const {
  scoreSeason
} = require('./bowlingSeason');

describe('scoreSeason', () => {  
  it('Should return the expected output sampleAbsentSeasonOutput for input sampleAbsentSeasonInput', () => {
    expect(scoreSeason(sampleAbsentSeasonInput)).toEqual(sampleAbsentSeasonOutput);
  });
  
  it('Should return the expected output sampleInvalidSeasonOutput for input sampleInvalidSeasonInput', () => {
    expect(scoreSeason(sampleInvalidSeasonInput)).toEqual(sampleInvalidSeasonOutput);
  });
  
  it('Should return the expected output sampleMidrangeSeasonOutput for input sampleMidrangeSeasonInput', () => {
    expect(scoreSeason(sampleMidrangeSeasonInput)).toEqual(sampleMidrangeSeasonOutput);
  });
  
  it('Should return the expected output samplePartTimeSeasonOutput for input samplePartTimeSeasonInput', () => {
    expect(scoreSeason(samplePartTimeSeasonInput)).toEqual(samplePartTimeSeasonOutput);
  });
  
  it('Should return the expected output samplePerfectSeasonOutput for input samplePerfectSeasonInput', () => {
    expect(scoreSeason(samplePerfectSeasonInput)).toEqual(samplePerfectSeasonOutput);
  });
});