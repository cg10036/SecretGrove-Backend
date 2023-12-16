import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
  })
  createdAt: Date;

  @Column("text", { nullable: false })
  name: string;

  @Index()
  @Column("text", { nullable: false })
  to: string; // room receiver, use on delete room

  @Column("text", { nullable: false })
  from: string; // use on delete room

  @Column("text", { nullable: false })
  key: string; // room key encrypt by room receiver's public key
}
