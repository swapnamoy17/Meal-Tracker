require('dotenv').config();

const express = require("express");
const cors = require("cors");
const _ = require("lodash");

const db = require("./models/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// //using dotenv
// mongoose.connect(process.env.MONGODB_SERVER, {
//   useNewUrlParser: true
// });


const homeRouter = require("./routes/home");
const addMealRouter = require("./routes/addMeal");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", homeRouter);
app.use("/add/", addMealRouter);

app.listen(process.env.PORT || 5000, function() {
  console.log("Server started on port 5000");
});
