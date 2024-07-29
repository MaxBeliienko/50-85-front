export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectUserProfile = state => state.auth.user;
export const selectUpdateUserProfile = state => state.auth.user;
export const selectIsLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;
