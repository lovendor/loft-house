import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export interface AppState {
  auth: AuthState;
}

export const selectAuthState = (state: AppState) => state.auth;

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const isLoggedIn = createSelector(
  selectUser,
  (user) => !!user
);
