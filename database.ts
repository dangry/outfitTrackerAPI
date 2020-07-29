import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";
import { Product } from "./types.ts";

const db = new Database("postgres", {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "outfit",
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

// await db.sync({ drop: true });


const findAllProducts = async () => {
  return await ProductModel.all();
};

const findProductById = async (id: string) => {
  return await ProductModel.find(id);
};

const saveProduct = async (product: Product) => {
  await ProductModel.create({ ...product });
};

export { findAllProducts, findProductById, saveProduct };
