// @ts-ignore
import { v4 } from "https://deno.land/std/uuid/mod.ts";
// @ts-ignore
import { Garment } from "../types.ts";
// @ts-ignore
import { findAllGarments, findGarmentById, saveGarment } from "../database/index.ts";

const getGarments = async ({ response }: { response: any }) => {
  const garments: Garment[] = await findAllGarments();

  response.body = {
    success: true,
    data: garments,
  };
};

const getGarment = async (
  { params, response }: { params: { id: string }; response: any },
) => {
  const garment: Garment | undefined = await findGarmentById(params.id);

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
      msg: "No garment found",
    };
  }
};

const addGarment = async (
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
    const garment: Garment = await body.value;
    garment.id = v4.generate();
    saveGarment(garment);

    response.status = 201;
    response.body = {
      success: true,
      data: garment,
    };
  }
};

export { getGarments, getGarment, addGarment };
