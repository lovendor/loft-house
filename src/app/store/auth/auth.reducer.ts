import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  user: { username: string } | null;
}

export const initialAuthState: AuthState = {
  user: null
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { username }) => ({
    ...state,
    user: { username }
  })),
  on(logout, () => initialAuthState)
);
