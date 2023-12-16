import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Index,
} from "typeorm";

@Entity()
export class DeleteRoom extends BaseEntity {
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

  @Column("text", { nullable: false })
  from: string; // delete message sender

  @Column("text", { nullable: false })
  sign: string; // sign of chat_id with user's private key
}
