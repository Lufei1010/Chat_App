import { Client, Databases } from "appwrite";

export const PROJECT_ID = `673fa55c002821ecf4a8`;
export const DATABASE_ID = `673fa6d70015e3cb2db7`;
export const COLLECTION_ID_MESSAGES = `673fa705000cf4c99438`;

const client = new Client();
client.setProject("673fa55c002821ecf4a8");

export const databases = new Databases(client);

export default client;