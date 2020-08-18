import { ClientPostgreSQL } from "https://deno.land/x/nessie/mod.ts";

/** These are the default config options. */
const clientOptions = {
  migrationFolder: "./db/migrations",
  seedFolder: "./db/seeds",
};

const connectionOptions = {
  database: "outfit",
  hostname: "localhost",
  port: 5432,
  user: "postgres",
  password: "",
};

/** This is the final config object */
const config = {
  client: new ClientPostgreSQL(clientOptions, connectionOptions),
  exposeQueryBuilder: true,
};

export default config;
