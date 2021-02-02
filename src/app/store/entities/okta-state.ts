export interface OktaState {
  isPending?: boolean;
  isAuthenticated: boolean;
  accessToken?: {
    value: string,
  };
  idToken?: {
    value: string,
  };
  error?: {
    value: string,
  };
}
