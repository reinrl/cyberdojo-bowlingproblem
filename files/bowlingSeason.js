"use strict";

const {
  scoreGame
} = require('./bowling');

// given an array of games and a specific key to look at for a score, calculate the average score over the length of the array
const _calculateAvgScore = (games, key) => 
  Math.round(games.reduce((accumulator, currentGame) => accumulator + currentGame[key], 0) / games.length);

/* Our "Super Special Spare Swords and Sharpened Strikes" bowling league has a 
  scratch score of 220. A given bowler starts with a handicap of zero for their 
  first week's scores. Throughout the season, bowling three games in the previous 
  week sets their handicap for the current week to 90% of the scratch score (220) 
  minus their previous week's average (or a 0 handicap if they are at or above the 
  scratch score). If they did not bowl three games the previous week (or scored zero 
  in any of those games), then their handicap remains unchanged. */
const _calculateHandicap = (score, games) => {
  const scratchScore = 220;
  
  // must have a non-zero score lower than the scratch score, and last week needed to have three games to calculate an average off of
  if (score === 0 || score > scratchScore || games.length < 3) {
    return score;
  }
  
  const previousWeekAvg = _calculateAvgScore(games, "score"); 
  return Math.round(.9 * (scratchScore - previousWeekAvg)) + score;
};

const scoreSeason = (weeks) => {
  // initialize final output object structure
  let seasonOutput = {
    averageScore: 0,
    handicapAverageScore: 0,
    games: Array.from({ length: 12 }, () => ({ score: 0, handicapScore: 0 }))
  };
  
  // loop over the weeks
  weeks.forEach((week, weekIdx) => {
    // loop over the game each week
    week.forEach((game, gameIdx) => {
      // because we flatten out the array of arrays into a single-level array of games across the season, 
      // we need to math about the current position in the single dimensional output array of games
      const outputIdx = weekIdx * 3 + gameIdx;
      // attempt to score this game 
      const actualGameScore = scoreGame(game.input);
      // place it in the appropriate spot
      seasonOutput.games[outputIdx].score = actualGameScore;
      // attempt to apply a handicap to the score for this game and then place it in the appropriate spot
      const previousWeekGames = weekIdx > 0 ? weeks[weekIdx-1] : [];
      seasonOutput.games[outputIdx].handicapScore = _calculateHandicap(actualGameScore, previousWeekGames);
    });
  });
  
  // calculate and store season averages
  seasonOutput.averageScore = _calculateAvgScore(seasonOutput.games, "score");  
  seasonOutput.handicapAverageScore = _calculateAvgScore(seasonOutput.games, "handicapScore");
  
  // tell em what they've won, Bob!
  return seasonOutput;
};

module.exports = {
  scoreSeason,
};