import { Migration } from "https://deno.land/x/nessie/mod.ts";
import { Schema } from "https://deno.land/x/nessie/qb.ts";

export const up: Migration<Schema> = ({ queryBuilder }) => {
  queryBuilder.create("garments", (table) => {
    table.uuid("id").primary();
    table.string("name", 100).nullable();
    table.string("description", 100).nullable();
    table.timestamps();
  });

  return queryBuilder.query
};

export const down: Migration<Schema> = ({ queryBuilder }) => {
  return queryBuilder.drop("garments");
};