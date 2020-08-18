// @ts-ignore
import { v4 } from "https://deno.land/std/uuid/mod.ts";
// @ts-ignore
import { Outfit } from "../types.ts";
// @ts-ignore
import { findOutfitById, saveOutfit } from "../database/index.ts";

const addOutfit = async (
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
    const outfit: Outfit = await body.value;
    outfit.id = v4.generate();
    saveOutfit(outfit);

    response.status = 201;
    response.body = {
      success: true,
      data: outfit,
    };
  }
};

const getOutfit = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const garment: Outfit | undefined = await findOutfitById(params.id);

  if (garment) {
    response.status = 200;
    response.body = {
      success: true,
      data: garment,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No outfit found",
    };
  }
};

export { addOutfit, getOutfit };
