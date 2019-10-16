const initialState = { user: {}, isLoggedIn: false };

let updateLocalStorageWithUser = (user) => {
  // Save user with 'unique' key being user + email
  let key = 'email' + user.email;
  window.localStorage.setItem(key, JSON.stringify(user));
};

let updateUserProps = (user) => {
  let userKey = 'email' + user.email;
  window.localStorage.setItem(userKey, JSON.stringify(user));
};

let currentUserHandler = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      updateLocalStorageWithUser(action.user);
      for (let userProp in action.user) {
        state.user[userProp] = action.user[userProp];
      }
      console.log('update user now it is user is', state.user);
      return {
        ...state,
        user: state.user
      }
    case 'UPDATE_LOGIN_STATUS':
      console.log('updated is logged in with', action.isLoggedIn);
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
  }
  return state;
}

export default currentUserHandler;