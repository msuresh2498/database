import * as dotenv from 'dotenv' 
import moviesRouter from "./routes/movie.route.js";
import userRouter from "./routes/users.routes.js"
import express from 'express'
import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'
import cors from 'cors'



console.log(process.env.MONGO_URL)
dotenv.config()
const app = express();
const PORT = process.env.PORT;

//const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("Mongodb is connected");

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.send("hello World😊😊😊🎉🎉");
});
app.use("/movies", moviesRouter);
app.use("/users", userRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export {client};

async function generateHashedPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedpassword);
}
generateHashedPassword("password123")