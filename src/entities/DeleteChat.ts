import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class DeleteChat extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
  })
  createdAt: Date;

  @Index()
  @Column("bigint", { name: "room_id", nullable: false })
  roomId: number;

  @Column("bigint", { name: "chat_id", nullable: false })
  chatId: number;

  @Column("text", { nullable: false })
  sign: string; // sign of chat_id with user's private key
}
