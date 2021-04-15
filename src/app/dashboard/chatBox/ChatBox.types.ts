import { Message, Profile } from '../Dashboard.types';

export type ChatBoxProps = {
  selectedProfile?: Profile;
  onSubmitMessage: (message: string) => void;
  messages: Message[];
};
