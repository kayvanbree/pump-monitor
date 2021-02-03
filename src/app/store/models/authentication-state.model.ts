import {Profile} from '../entities/profile';

export interface AuthenticationStateModel {
  isPending: boolean;
  isAuthenticated: boolean;
  accessToken?: string;
  idToken?: string;
  error?: string;
  profile?: Profile;
}
