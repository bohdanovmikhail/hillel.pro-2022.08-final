import { BaseModel } from '@core/models/_BaseModel';

export interface MessageModel extends BaseModel {
  fromUserId: string;
  created: number;
  text: string;
}
