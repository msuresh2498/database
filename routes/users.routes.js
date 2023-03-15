import express from "express";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createUsers, getUserbyName } from "../services/users.services.js";

const router = express.Router();

async function generateHashedPassword(password) {
    const NO_OF_ROUNDS = 10;
    const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
    const hashedpassword = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hashedpassword);
    return hashedpassword
}


router.post("/signup", async function (request, response) {
    const { username, password } = request.body;
    const userFromDB = await getUserbyName(username);
    console.log(userFromDB)

    if (userFromDB) {
        response.status(400).send({ message: "username alredy exists" })
    }
    else if (password.length < 8) {
        response.status(400).send({ message: "password must be at least 8 characters" })
    }
    else {
        const hashedpassword = await generateHashedPassword(password);
        const result = await createUsers({
            username: username,
            password: hashedpassword
        })
        response.send(result);
    }
});

router.post("/login", async function (request, response) {
    const { username, password } = request.body;
    const userFromDB = await getUserbyName(username);
    console.log(userFromDB)

    if (!userFromDB) {
        response.status(401).send({ message: "Invalid credentials" })
    } else {
        const StoredDBPassword = userFromDB.password;
        const isPasswordCheck = await bcrypt.compare(password, StoredDBPassword);
        console.log(isPasswordCheck)

        if (isPasswordCheck) {
            const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY)
            response.send({ message: "Login Succesfully", token: token })
        } else {
            response.status(401).send({ message: "Invalid credentials" })
        }
    }
});


export default router;