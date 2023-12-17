import { Length, IsString, IsNumber } from "class-validator";

export class CreateRoomValidator {
  @Length(1)
  @IsString()
  name: string;

  @Length(1)
  @IsString()
  to: string;

  @Length(1)
  @IsString()
  from: string;

  @Length(1)
  @IsString()
  key: string;
}

export class DeleteRoomValidator {
  @IsNumber()
  roomId: number;

  @Length(1)
  @IsString()
  from: string;

  @Length(1)
  @IsString()
  sign: string;
}
