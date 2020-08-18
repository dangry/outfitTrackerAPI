import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";


class OutfitsGarmentsModel extends Model {
  static table = "outfits_garments";

  static timestamps = true;

  static fields = {
    outfit_id: DataTypes.UUID,
    garment_id: DataTypes.UUID,
  };
}

export default OutfitsGarmentsModel
