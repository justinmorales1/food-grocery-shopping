export function updateLoggedInUser(user) {
  return {
    type: 'UPDATE_USER',
    user: user
  } 
}