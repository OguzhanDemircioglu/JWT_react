export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};
export const clearCurrentUser = (user) => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};
