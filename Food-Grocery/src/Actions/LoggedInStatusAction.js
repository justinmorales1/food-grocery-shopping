export function updateLoggedInUserStatus(isLoggedIn) {
    return {
      type: 'UPDATE_LOGIN_STATUS',
      isLoggedIn: isLoggedIn
    } 
  }