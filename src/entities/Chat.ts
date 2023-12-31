import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Chat extends BaseEntity {
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
  message: string; // encrypted with room key

  @Column("text", { nullable: false })
  from: string; // message sender
}
