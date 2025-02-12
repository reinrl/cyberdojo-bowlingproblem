"use strict";

const _getFrameTotal = (frame) => {
  const frameAsArr = frame.split("");

  let runningScore = 0;
  frameAsArr.forEach((roll, rollIdx) => {
    switch (roll) {
      case "X":
        runningScore += 10;
        break;
      case "/":
        runningScore += 10 - frameAsArr[rollIdx - 1];
        break;
      case "-":
        // misses shouldn't change the current score at all
        break;
      default:
        runningScore += parseInt(roll);
        break;
    }
  });

  return runningScore;
};

const _validateAnyFrame = (frame) => {
  const validScoreCharacters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-",
    "X",
    "/",
  ];

  return frame.split("").every((char) => validScoreCharacters.includes(char));
};

const _validateRegularFrame = (frame) => {
  const frameAsArr = frame.split("");

  // a regular frame can only be one or two rolls
  const validNumOfRoundThings = [1, 2].includes(frameAsArr.length);
  // if more than one ball, cannot be a strike (and one ball must be a strike)
  const validStrikeFrame =
    frame === "X" || (frameAsArr.length === 2 && !frameAsArr.includes("X"));
  // spares must be two ball frames, and can only be the second ball
  const validSpareFrame =
    !frameAsArr.includes("/") ||
    (frameAsArr.includes("/") && frameAsArr[1] === "/");

  return (
    validNumOfRoundThings &&
    validStrikeFrame &&
    validSpareFrame &&
    _validateAnyFrame(frame) &&
    _getFrameTotal(frame) <= 10
  );
};

const _validateBonusFrame = (frame, tenthFrame) => {
  // look at the last ball of the tenth frame
  switch (tenthFrame[tenthFrame.length - 1]) {
    case "X":
      return (
        frame.split("").length === 2 &&
        _validateAnyFrame(frame) &&
        _getFrameTotal(frame) <= 20
      );
    case "/":
      return (
        frame.split("").length === 1 &&
        _validateAnyFrame(frame) &&
        _getFrameTotal(frame) <= 10
      );
    default:
      return frame === "";
  }
};

const _validateGame = (scoreline) => {
  // first ten frames are 1-9, bonus is 11
  const frames = scoreline.split("|");

  // easy out - not enough frames go boom
  return (
    frames.length === 12 &&
    frames.every((frame, frameIdx) => {
      switch (frameIdx) {
        //bonus frame
        case 11:
          return _validateBonusFrame(frame, frames[9]);
        // designated bonus frame comes next (so this should be empty)
        case 10:
          return frame.length === 0;
        // first ten frames
        default:
          return _validateRegularFrame(frame);
      }
    })
  );
};

const _convertScorelineToRolls = (scoreline) => {
  let rolls = scoreline.replace(/[^1-9X/-]+/g, "").split("");
  for (let i = 0; i < rolls.length; i++) {
    if (rolls[i] === "X") {
      rolls[i] = 10;
    } else if (rolls[i] === "/") {
      rolls[i] = 10 - rolls[i - 1];
    } else if (rolls[i] === "-") {
      rolls[i] = 0;
    } else {
      rolls[i] = parseInt(rolls[i]);
    }
  }
  return rolls;
};

const _isStrike = (rolls, frameIndex) => {
  return rolls[frameIndex] === 10;
};

const _sumOfBallsInFrame = (rolls, frameIndex) => {
  return rolls[frameIndex] + rolls[frameIndex + 1];
};

const _spareBonus = (rolls, frameIndex) => {
  return rolls[frameIndex + 2];
};

const _strikeBonus = (rolls, frameIndex) => {
  return rolls[frameIndex + 1] + rolls[frameIndex + 2];
};

const _isSpare = (rolls, frameIndex) => {
  return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
};

const scoreGame = (scoreline) => {
  if (_validateGame(scoreline)) {
    // short circuit for a perfect game
    if (scoreline.split("").filter((char) => char === "X").length === 12) {
      return 300;
    } else {
      const rolls = _convertScorelineToRolls(scoreline);
      let score = 0;
      let frameIndex = 0;
      for (let frame = 0; frame < 10; frame++) {
        if (_isStrike(rolls, frameIndex)) {
          score += 10 + _strikeBonus(rolls, frameIndex);
          frameIndex++;
        } else if (_isSpare(rolls, frameIndex)) {
          score += 10 + _spareBonus(rolls, frameIndex);
          frameIndex += 2;
        } else {
          score += _sumOfBallsInFrame(rolls, frameIndex);
          frameIndex += 2;
        }
      }
      return score;
    }
  } else {
    // invalid games score as zero
    return 0;
  }
};

module.exports = {
  scoreGame,
};
