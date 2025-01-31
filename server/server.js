// js file on our server side to connect to DB to get the data

import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// a pool connects our express app (server) to connect to our DB
// coonectString allows it to connect to the specific DB
// returns a DB object
const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

// listening for a GET request on the root route and will then respond with hello
app.get("/", (request, response) => {
  response.json("Hello this is your GET data");
});

// fetch reviews from my SQL table
// the result is a JSON object with the data we want inside
app.get("/reviews", async (request, response) => {
  const result = await db.query(`SELECT * FROM reviews`);
  const reviews = result.rows;
  console.log(result);
  response.json(reviews);
});

// creating new data from the client and posting it back to server
app.post("/reviews", async (request, response) => {
  const body = request.body;
  const review = request.body.review;
  const reviewer = request.body.name;
  const data = await db.query(
    `INSERT INTO reviews (name, review) VALUES (${reviewer}, ${review})`
  );

  //   need to include the reponse otherwise the data requested has nowhere to go to, will just keep sending
  response.json(body);
});

app.listen("8080", () => {
  console.log("Woohoo! 8080 is open!");
});
