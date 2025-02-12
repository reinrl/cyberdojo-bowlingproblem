const scoreScenarios = [
  // a collection of valid games
  { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  { input: "9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||", isValid: true, score: 90 },
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  { input: "X|7/|9-|X|-8|8/|-6|X|X|X||81", isValid: true, score: 167 },
  { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||-", isValid: true, score: 145 },
  { input: "9-|9-|9-|9-|9-|9-|9-|9-|9-|X||XX", isValid: true, score: 111 },
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

  module.exports = scoreScenarios;
