import express from "express";
import { getAllmovie, getmoviebyid, createmovie, deletemoviebyid, updatemoviebyid } from "../services/movie.serices.js";

const router = express.Router();

router.get("/", async function (request, response) {
    const movies = await getAllmovie(request);
    response.send(movies)
});

router.get("/:id", async function (request, response) {
    const moviesid = await client.db("basic").collection("movies").find({})
    console.log(moviesid)
    response.send(moviesid);
});

router.get("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)

    const movie = await getmoviebyid(id)
    console.log(movie)
    //const movie =movies.find((mv)=> mv.id === id)
    movie ? response.send(movie) : response.status(404).send({ message: "Movie not found" })
        //const movie =movies.filter((mv)=> mv.id === id)
        ;
});
router.post("/", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await createmovie(data)
    response.send(result)
});

router.delete("/:id", async function (request, response) {
    const { id } = request.params
    console.log(id)

    const result = await deletemoviebyid(id)
    console.log(result)

    result.deletedCount > 0 ? response.send({ message: "movie deleted successfully!!!" })
        : response.status(404).send({ message: "Movie not found" });
});

router.put("/:id", async function (request, response) {
    const { id } = request.params
    const data = request.body;
    console.log(id)

    const result = await updatemoviebyid(id, data)
    console.log(result)

    response.send(result);

});

export default router;


