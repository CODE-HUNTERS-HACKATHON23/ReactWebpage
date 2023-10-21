import createClient from "openapi-fetch";
import { paths } from "./schema";

const Client = createClient<paths>({
  baseUrl: process.env.API_URL
});

export { Client };