// @ts-ignore
import { v4 } from "https://deno.land/std/uuid/mod.ts";
// @ts-ignore
import { Outfit } from "../types.ts";
// @ts-ignore
import { saveOutfit } from "../database/index.ts";

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

export { addOutfit };
