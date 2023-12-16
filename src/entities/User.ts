import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  Index,
  CreateDateColumn,
} from "typeorm";

@Entity()
@Unique(["username"])
@Unique(["pubkey"])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @CreateDateColumn({
    name: "created_at",
    type: "timestamptz",
  })
  createdAt: Date;

  @Index()
  @Column("varchar")
  username: string;

  @Column("text")
  pubkey: string;
}
