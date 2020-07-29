import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
import { Garment } from "./types.ts";

const db = new Database("postgres", {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "outfit",
});

class GarmentModel extends Model {
  static table = "garments";

  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
  };
}

db.link([GarmentModel]);

// await db.sync({ drop: true });


const findAllGarments = async () => {
  return await GarmentModel.all();
};

const findGarmentById = async (id: string) => {
  return await GarmentModel.find(id);
};

const saveGarment = async (garment: Garment) => {
  await GarmentModel.create({ ...garment });
};

export { findAllGarments, findGarmentById, saveGarment };
