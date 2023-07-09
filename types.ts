export interface Message {
  id: number;
  sender: string;
  text: string;
}
export enum ActionType{
 ADD_MESSAGE
}