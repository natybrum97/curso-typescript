import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicSchema } from "squemas/music-schemas";
import { validateSchema } from "middlewares/middleware-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;