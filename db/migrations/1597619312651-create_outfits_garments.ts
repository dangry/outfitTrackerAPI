import { Migration } from "https://deno.land/x/nessie/mod.ts";

/** Runs on migrate */
export const up: Migration = () => {
  return "CREATE TABLE outfits_garments (outfit_id uuid REFERENCES outfits (id) ON UPDATE CASCADE ON DELETE CASCADE, garment_id uuid REFERENCES garments (id) ON UPDATE CASCADE ON DELETE CASCADE, CONSTRAINT outfits_garments_pkey PRIMARY KEY (outfit_id, garment_id));";
};

/** Runs on rollback */
export const down: Migration = () => {
  return "DROP TABLE outfits_garments";
};
