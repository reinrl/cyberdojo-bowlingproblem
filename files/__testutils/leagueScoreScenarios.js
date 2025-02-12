const sampleAbsentSeasonInput = [[], [], [], []];

const sampleAbsentSeasonOutput = {
  averageScore: 0,
  handicapAverageScore: 0,
  games: [
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
  ],
};

const sampleInvalidSeasonInput = [
  [
    // too many points in a regular frame week after week - when will they learn how to report their score??
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
  ],
  [
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
  ],
  [
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
  ],
  [
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
    { input: "5/|5/|88|5/|5/|5/|5/|5/|5/|5/||-", isValid: false, score: 0 },
  ],
];

const sampleInvalidSeasonOutput = {
  averageScore: 0,
  handicapAverageScore: 0,
  games: [
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
    { score: 0, handicapScore: 0 },
  ],
};

const sampleMidrangeSeasonInput = [
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
];

const sampleMidrangeSeasonOutput = {
  averageScore: 150,
  handicapAverageScore: 197,
  games: [
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
    { score: 150, handicapScore: 213 },
  ],
};

const samplePartTimeSeasonInput = [
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
  [
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
    { input: "5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5", isValid: true, score: 150 },
  ],
];

const samplePartTimeSeasonOutput = {
  averageScore: 100,
  handicapAverageScore: 100,
  games: [
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 0, handicapScore: 0 },
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 0, handicapScore: 0 },
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 0, handicapScore: 0 },
    { score: 150, handicapScore: 150 },
    { score: 150, handicapScore: 150 },
    { score: 0, handicapScore: 0 },
  ],
};

const samplePerfectSeasonInput = [
  [
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  ],
  [
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  ],
  [
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  ],
  [
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
    { input: "X|X|X|X|X|X|X|X|X|X||XX", isValid: true, score: 300 },
  ],
];

const samplePerfectSeasonOutput = {
  averageScore: 300,
  handicapAverageScore: 300,
  games: [
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
    { score: 300, handicapScore: 300 },
  ],
};

module.exports = {
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
};
