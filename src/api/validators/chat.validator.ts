import { Length, IsString, IsNumber } from "class-validator";

export class SendChatValidator {
  @IsNumber()
  roomId: number;

  @Length(1)
  @IsString()
  message: string;

  @Length(1)
  @IsString()
  from: string;
}

export class DeleteChatValidator {
  @IsNumber()
  roomId: number;

  @IsNumber()
  chatId: number;

  @Length(1)
  @IsString()
  sign: string;
}
