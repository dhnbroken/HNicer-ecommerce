// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export function authHeader() {
  const userStr = sessionStorage.getItem('token');
  let token = '';
  if (userStr) {
    token = JSON.parse(userStr);
  }

  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return { Authorization: '' };
  }
}
