Write a program to score a game of Ten-Pin Bowling.

Input: string (described below) representing a bowling game
Output: integer score

The scoring rules:

Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.

In each frame, the bowler gets up to two tries to knock down all ten pins.

If the first ball in a frame knocks down all ten pins, this is called a "strike". The frame is over. The score for the frame is ten plus the total of the pins knocked down in the next two balls.

If the second ball in a frame knocks down all ten pins,  this is called a "spare". The frame is over. The score for the frame is ten plus the number of pins knocked down in the next ball.

If, after both balls, there is still at least one of the ten pins standing the score for that frame is simply the total number of pins knocked down in those two balls.

If you get a spare in the last (10th) frame you get one  more bonus ball.

If you get a strike in the last (10th)  frame you get two more bonus balls.

These bonus throws are taken as part of the same turn.  If a bonus ball knocks down all the pins, the process  does not repeat. The bonus balls are only used to calculate the score of the final frame.

The game score is the total of all frame scores.

Examples:

X indicates a strike
/ indicates a spare
- indicates a miss
| indicates a frame boundary
The characters after the || indicate bonus balls

X|X|X|X|X|X|X|X|X|X||XX
Ten strikes on the first ball of all ten frames.
Two bonus balls, both strikes.
Score for each frame == 10 + score for next two
balls == 10 + 10 + 10 == 30
Total score == 10 frames x 30 == 300

9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||
Nine pins hit on the first ball of all ten frames.
Second ball of each frame misses last remaining pin.
No bonus balls.
Score for each frame == 9
Total score == 10 frames x 9 == 90

5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5
Five pins on the first ball of all ten frames.
Second ball of each frame hits all five remaining
pins, a spare.
One bonus ball, hits five pins.
Score for each frame == 10 + score for next one
ball == 10 + 5 == 15
Total score == 10 frames x 15 == 150

X|7/|9-|X|-8|8/|-6|X|X|X||81
Total score == 167

----------------
    Week One  
---------------- 

This week we are tackling round 1 of the Bowling project. Specifically, please aim to tackle validating the input provided to your scoring function. To help you get started, here are some sample input scenarios (and whether they should be valid or not):

```js
const scoreScenarios = [
    // a collection of valid games
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", isValid: true, score: 90 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "X|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: true, score: 167 },
    // invalid character
    { input: "B|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
    // too many characters
    { input: "123|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
    // no bonus frame
    { input: "X|7/|9-|X|-8|8/|-6|X|X|--", isValid: false, score: 0 },
    // invalid bonus frame
    { input: "X|7/|9-|X|-8|8/|-6|X|X|--||81", isValid: false, score: 0 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||51", isValid: false, score: 0 },
    // invalid strike frame
    { input: "X1|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
    // invalid spare frame
    { input: "/|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
];
```

----------------
    Week Two  
---------------- 
This week we are tackling round 2 of the Bowling project. Specifically, please aim to tackle the actual scoring of a bowling game. To help you get started, please use these updating sample scenarios (thanks everyone for your input last week, I have updated the list to cover some additional scenarios - if you would like to create additional valid scenarios for yourself, you can use an online scoring website like [this one](https://www.bowlinggenius.com/) to double-check your math.

```js
const scoreScenarios = [
  // a collection of valid games
  { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  { input: "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", isValid: true, score: 90 },
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  { input: "X|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: true, score: 167 },
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||-", isValid: true, score: 145 },
  // invalid character
  { input: "B|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||A", isValid: false, score: 0 },
  // too many characters
  { input: "123|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  // no bonus frame
  { input: "X|7/|9-|X|-8|8/|-6|X|X|--", isValid: false, score: 0 },
  // invalid bonus frame (shouldn't be one)
  { input: "X|7/|9-|X|-8|8/|-6|X|X|--||81", isValid: false, score: 0 },
  // invalid bonus frame (too many rolls)
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||51", isValid: false, score: 0 },
  // invalid strike frame
  { input: "X1|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  // invalid spare frame
  { input: "/|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  { input: "/1|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  // too many frames
  { input: "X|7/|9-|X|-8|8/|-6|X|X|X|X||81", isValid: false, score: 0 },
  // too few frames
  { input: "7/|9-|X|-8|8/|-6|X|X|X||81", isValid: false, score: 0 },
  // too many points in a regular frame
  { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
  // invalid delimiter between regular frames and bonus
  { input: "5/|5/|8-|5/|5/|5/|5/|5/|5/|5/|8|-", isValid: false, score: 0 },
];
```

----------------
    Week Three  
---------------- 
The coming week is week 3 of our bowling game exercise - the big finale! To give you as much flexibility as possible, I am posting the assignment today. We will be using the same teams as previous weeks - as always, if you haven't participated so far please feel free to post a message here or reach out to me directly, and we can help get you steered towards a team for the week (and if your partner can't join you this week - and you don't want to give it a try on your own - also reach out join another group).
 
So far, we have built out a mechanism for validating that the provided input matches the expected pattern for a valid bowling game score line, and then providing a score for a valid game of bowling (or 0 for invalid games). Now we are going to attempt to figure out the average and handicapped average for a season's worth of league bowling. Consider the following requirements:
- Your program should continue to receive individual game scores in the same format as the previous two weeks. The input to this week's exercise should be an array of (4) weeks containing 0-3 individual game scores).
- Individual bowlers may or may not have bowled every week, leaving them with up to 3 valid games per week over a shortened four week season (so a maximum of 12 valid games should be accepted).
- Our "Super Special Spare Swords and Sharpened Strikes" bowling league has a scratch score of 220. A given bowler starts with a handicap of zero for their first week's scores. Throughout the season, bowling three games in the previous week sets their handicap for the current week to 90% of the scratch score (220) minus their previous week's average (or a 0 handicap if they are at or above the scratch score). If they did not bowl three games the previous week, then their handicap remains unchanged.
- Your output should include both the actual and handicapped score for a given game, along with calculating the bowler's actual and handicapped average for the season (both average calculations should assume perfect 12 game attendance).
- We don't distinguish between not bowling and actually managing to bowl a 0 for a given game (so by extension, only calculate a handicap if they bowled three non-zero games the previous week.

The choice is entirely up to you whether you continue to use your existing code as your starting point, or begin with [this example](files/bowling.js) (based on the presentation, it covers validating and scoring an individual game). To further assist in your efforts this week, I have created a [series of sample inputs and outputs](files/__testutils/leagueScoreScenarios.js) - please consider this just a starting point, and expand to additional cases as you see fit to verify your logic.