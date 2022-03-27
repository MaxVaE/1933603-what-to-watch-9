const TOKEN_AUTH_KEY_NAME = 'wtw_token';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(TOKEN_AUTH_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(TOKEN_AUTH_KEY_NAME, token);
};

export const dropToken = (): void => {
  localStorage.removeItem(TOKEN_AUTH_KEY_NAME);
};
