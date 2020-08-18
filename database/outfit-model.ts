import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";


class OutfitModel extends Model {
  static table = "outfits";

  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    // garments: DataTypes.JSONB
  };
}

export default OutfitModel
