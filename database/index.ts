import { Database, Model, DataTypes, Relationships } from "https://deno.land/x/denodb/mod.ts";
import { Garment, Outfit } from "../types.ts";
import OutfitModel from "./outfit-model.ts"
import GarmentModel from "./garment-model.ts"
import OutfitsGarmentsModel from "./outfits-garments-model.ts"

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

const saveOutfit = async (outfit: Outfit) => {
  let {garmentIds, ...outfit2} = outfit
    await OutfitModel.create({...outfit2})
    for (let garmentId of outfit.garmentIds) {
      await OutfitsGarmentsModel.create({ outfit_id: outfit.id, garment_id: garmentId })
    }
  };

export { findAllGarments, findGarmentById, saveGarment, saveOutfit };