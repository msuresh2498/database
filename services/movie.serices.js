import { client } from "../index.js";

export async function deletemoviebyid(id) {
    return await client.db("basic").collection("movies").deleteOne({ id: id });
}
export async function updatemoviebyid(id, data) {
    return await client.db("basic").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function createmovie(data) {
    return await client.db("basic").collection("movies").insertMany(data);
}
export async function getAllmovie(request) {
    return await client.db("basic").collection("movies").find(request.query).toArray();
}
export async function getmoviebyid(id) {
    return await client.db("basic").collection("movies").findOne({ id: id });
}
