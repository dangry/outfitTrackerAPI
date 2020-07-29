// @ts-ignore
import { v4 } from "https://deno.land/std/uuid/mod.ts";
// @ts-ignore
import { Product } from "../types.ts";
// @ts-ignore
import { findAllProducts, findProductById, saveProduct } from "../database.ts";

const getProducts = async ({ response }: { response: any }) => {
  const products: Product[] = await findAllProducts();

  response.body = {
    success: true,
    data: products,
  };
};

const getProduct = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = await findProductById(params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No product found",
    };
  }
};

const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const product: Product = await body.value;
    product.id = v4.generate();
    saveProduct(product);

    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

export { getProducts, getProduct, addProduct };
