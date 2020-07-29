import { Router } from "https://deno.land/x/oak/mod.ts";
import { getGarments, getGarment, addGarment } from "./controllers/garments.ts";

const router = new Router();

router
.get("/api/v1/garments", getGarments)
.get(
  "/api/v1/garments/:id",
  getGarment,
)
.post("/api/v1/garments", addGarment);

export default router;
