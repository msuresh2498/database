import { client } from "../index.js";

export async function createUsers(data) {
    return await client.db("basic").collection("users").insertOne(data);
}

export async function getUserbyName(username) {
    return await client.db("basic").collection("users").findOne({ username: username });
}