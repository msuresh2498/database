import * as dotenv from 'dotenv' 
dotenv.config()
import moviesRouter from "./routes/movie.route.js";
import express from 'express'
import { MongoClient } from 'mongodb'

console.log(process.env.MONGO_URL)

const app = express();
const PORT = process.env.PORT;

//const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongodb is connected");

app.use(express.json());

app.get("/", function (request, response) {
    response.send("hello World😊😊😊🎉🎉");
});
app.use("./movies", moviesRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};
