import { PROFILES as profilesMock } from 'api/mocks/profiles';
import { AuthStateContextType } from 'context/authContext/AuthContext.types';

export const useAuthState: () => AuthStateContextType = () => {
  return {
    user: profilesMock[0],
  };
};
