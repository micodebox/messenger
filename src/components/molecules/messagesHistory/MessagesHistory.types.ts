import { Message } from 'app/dashboard/Dashboard.types';

export type MessagesHistoryProps = {
  messages: MessagesHistoryItem[];
};

export type MessagesHistoryItem = Message & {
  isSent: boolean;
};
