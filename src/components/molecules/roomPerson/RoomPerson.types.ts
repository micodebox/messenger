import { Profile } from 'app/dashboard/Dashboard.types';

export type RoomPersonProps = {
  profile: Profile;
  isSelected?: boolean;
  onSelect?: (profile: Profile) => void;
};
