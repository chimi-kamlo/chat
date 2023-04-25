import { Message } from './types';

export const sendMessage = (message: Message) => ({
  type: 'SEND_MESSAGE',
  payload: message,
});

export const receiveMessage = (message: Message) => ({
  type: 'RECEIVE_MESSAGE',
  payload: message,
});