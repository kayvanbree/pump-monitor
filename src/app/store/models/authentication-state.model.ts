import {Profile} from '../entities/profile';

export interface AuthenticationStateModel {
  sessionId: string;
  isLoggedIn: boolean;
  webId: string;
  profile?: Profile;
}
