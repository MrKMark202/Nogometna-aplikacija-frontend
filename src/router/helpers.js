import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

function isAuthenticated() {
    
    const token = Cookies.get('token')
    
    return !!token 
  }

  function getUserRole() {
    const token = Cookies.get('token');
    if (!token) return null;
    
    const decodedToken = jwtDecode(token);
    return decodedToken.role;
}

  export { isAuthenticated };
  export  { getUserRole };

  export function decodeToken(token) {
    return jwtDecode(token);
}