import {
  Database,
  Model,
  DataTypes,
  Relationships,
} from "https://deno.land/x/denodb/mod.ts";
import { Garment, Outfit } from "../types.ts";
import OutfitModel from "./outfit-model.ts";
import GarmentModel from "./garment-model.ts";
import OutfitsGarmentsModel from "./outfits-garments-model.ts";

const db = new Database("postgres", {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "outfit",
});

db.link([GarmentModel, OutfitModel, OutfitsGarmentsModel]);

const findAllGarments = async () => {
  return await GarmentModel.all();
};

const findGarmentById = async (id: string) => {
  return await GarmentModel.find(id);
};

const saveGarment = async (garment: Garment) => {
  await GarmentModel.create({ ...garment });
};

const findOutfitById = async (id: string) => {
  const outfit: Outfit = await OutfitModel.find(id);
  const outfitGarments = await OutfitsGarmentsModel.select("garment_id").where(
    "outfit_id",
    id,
  ).get();
  const garments: Garment[] = [];

  const garmentIds = outfitGarments.map((og: any) => og.garment_id);

  for (let id of garmentIds) {
    const garment: Garment = await GarmentModel.find(id);
    garments.push(garment);
  }

  outfit.garments = garments;
  return outfit;
};

const saveOutfit = async (outfit: Outfit) => {
  let { garments, garmentIds, ...outfit2 } = outfit;
  await OutfitModel.create({ ...outfit2 });
  for (let garmentId of outfit.garmentIds) {
    await OutfitsGarmentsModel.create(
      { outfit_id: outfit.id, garment_id: garmentId },
    );
  }
};

export {
  findAllGarments,
  findGarmentById,
  findOutfitById,
  saveGarment,
  saveOutfit,
};
