export type DashboardProps = {
  currentUser: Profile;
  profiles: Profile[];
  selectedProfile?: Profile;
  messages: Message[];
  onSelectProfile: (profile: Profile) => void;
  onSubmitMessage: (message: string) => void;
};

export type Profile = {
  id: string;
  name: string;
  avatar?: string;
  gender: Gender;
  age: number;
};

export type Message = {
  id: string;
  sender: Profile;
  receiver: Profile;
  message: string;
  createdAt: string;
};

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}
