import { ID } from './_ID';
import { UserID } from './User';

export type MessageID = ID<Message>;

export interface Message {
  id: MessageID;
  fromUserId: UserID;
  created: number;
  text: string;
}
