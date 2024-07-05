
export const userAnalytics = {
  
    getFirstName(user) {
    let firstName = null;
    if (user.users.length > 0) {
      firstName = user.users[0];
        
      }
    
    return firstName;
  },
  
  getLastName(user) {
    let lastName = null;
    if (user.users.length > 0) {
      lastName = user.users[0];
        
      }
    
    return lastName;
  },
  
  getEmail(user) {
    let email = null;
    if (user.users.length > 0) {
      email = user.users[0];
        
      }
    
    return email;
  },
  
  getPassword(user) {
    let password = null;
    if (user.users.length > 0) {
      password = user.users[0];
        
      }
    
    return password;
  },
};