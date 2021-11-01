//@ts-nocheck
export default function usersReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return setUsers(state, action);
    default:
      throw new Error(`No action type found ${action.type}`);
  }
}

function setUsers(action) {
  const { payload } = action;
  return payload;
}
