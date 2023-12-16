import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/User";
import dbConfig from "./configs/db.config";
import { Chat } from "./entities/Chat";
import { DeleteChat } from "./entities/DeleteChat";
import { DeleteRoom } from "./entities/DeleteRoom";
import { Room } from "./entities/Room";

export const AppDataSource = new DataSource({
  type: "postgres",
  synchronize: true,
  logging: true,
  entities: [Chat, DeleteChat, DeleteRoom, Room, User],
  migrations: [],
  subscribers: [],
  ...dbConfig,
});
