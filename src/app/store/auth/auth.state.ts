export interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null
};
