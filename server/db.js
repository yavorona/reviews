var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/reviews", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var schema = mongoose.Schema({
  userId: Number,
  username: String,
  userLocation: String,
  numberOfContributions: Number,
  helpfulVotes: Number,
  profileImage: String,
  postDate: Date,
  reviewScore: Number,
  reviewTitle: Number,
  reviewText: String,
  stayDate: Date
});

var Reviews = mongoose.model("Reviews", schema);
