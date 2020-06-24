import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
import { Product } from "./types.ts";

const db = new Database("postgres", {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "postgres",
});

class ProductModel extends Model {
  static table = "products";

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

db.link([ProductModel]);

const saveProduct = async (product: Product) => {
  await ProductModel.create({ ...product });
};

const findProductById = async (id: string) => {
  return await ProductModel.find(id);
};

export { findProductById, saveProduct };
