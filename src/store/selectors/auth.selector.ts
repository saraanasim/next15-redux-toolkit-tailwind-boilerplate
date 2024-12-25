import { RootState } from '../store';

export const selectError = (state: RootState) => state.auth.error;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
