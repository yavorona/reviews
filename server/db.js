const mongoose = require("mongoose");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
mongoose.connect("mongodb://localhost/reviews", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const schema = mongoose.Schema({
  hotelId: Number,
  reviews: [
    {
      username: String,
      travelerType: String,
      userLocation: String,
      numberOfContributions: Number,
      helpfulVotes: Number,
      profileImage: String,
      postDate: Date,
      reviewScore: Number,
      reviewTitle: String,
      reviewText: String,
      stayDate: Date
    }
  ]
});

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

var Review = mongoose.model("Reviews", schema);
var arrayOfLocations = [
  "Denver",
  "Philadelphia",
  "Sacramento",
  "New York",
  "San Francisco",
  "Toronto",
  "Wildwood",
  "Atlanta",
  "Seattle"
];
var arrayOfTravelerTypes = [
  "Families",
  "Couples",
  "Solo",
  "Business",
  "Friends"
];

var randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

var getRandomNumber = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

var getRandomComment = () => {
  return {
    username: "user" + getRandomNumber(1, 400),
    travelerType:
      arrayOfTravelerTypes[
        Math.floor(Math.random() * arrayOfTravelerTypes.length)
      ],
    userLocation:
      arrayOfLocations[Math.floor(Math.random() * arrayOfLocations.length)],
    numberOfContributions: Math.floor(Math.random() * Math.floor(40)),
    helpfulVotes: Math.floor(Math.random() * Math.floor(20)),
    profileImage: "avatar.jpeg",
    postDate: randomDate(new Date(2012, 0, 1), new Date()),
    reviewScore: getRandomNumber(1, 5),
    reviewTitle: lorem.generateWords(2),
    reviewText: lorem.generateSentences(getRandomNumber(3, 10)),
    stayDate: randomDate(new Date(2012, 0, 1), new Date())
  };
};
for (var i = 0; i < 100; i++) {
  var randomComments = [];
  for (var j = 1; j <= getRandomNumber(1, 15); j++) {
    var randomComment = getRandomComment();
    randomComments.push(randomComment);
  }
  Review.create({
    hotelId: i,
    reviews: randomComments
  });
}

module.exports = {
  getReviewsbyID: (id, callback) => {
    Review.findOne({ hotelId: id }, callback);
  }
};
