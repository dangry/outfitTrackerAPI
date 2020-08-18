import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";

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

export default GarmentModel;