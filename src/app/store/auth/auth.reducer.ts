import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export interface AuthState {
  user: { username: string } | null;
}

export const initialAuthState: AuthState = {
  user: typeof window !== 'undefined' && localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!)
    : null
};

export const authReducer = createReducer(
  initialAuthState,

  on(login, (state, { username }) => {
    const user = { username };
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
    return { ...state, user };
  }),

  on(logout, (state) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    return { ...state, user: null };
  })
);
