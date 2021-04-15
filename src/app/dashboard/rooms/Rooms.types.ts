import { Profile } from '../Dashboard.types';

export type RoomsProps = {
  profiles: Profile[];
  selectedProfile?: Profile;
  onSelectProfile: (profile: Profile) => void;
};
