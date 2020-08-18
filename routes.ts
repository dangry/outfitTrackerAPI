import { Router } from "https://deno.land/x/oak/mod.ts";
import { getGarments, getGarment, addGarment } from "./controllers/garments.ts";
import { addOutfit, getOutfit } from "./controllers/outfits.ts";

const router = new Router();

router
.get("/api/v1/garments", getGarments)
.get(
  "/api/v1/garments/:id",
  getGarment,
)
.get(
  "/api/v1/outfits/:id",
  getOutfit,
)
.post("/api/v1/garments", addGarment)
.post("/api/v1/outfits", addOutfit);

export default router;
