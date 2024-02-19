// import { API_URL, END_POINTS } from '@config';
import { AUTH } from '@constants/routes';
// import { HTTPMethods } from '@types';
import { removeFromLocalStorage } from '@utils/generic-utils';

// const postData = async (url = '', data = {}) => {
//   const response = await fetch(url, {
//     method: HTTPMethods.POST,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// };

// export const getNewTokens = async (refreshToken: string) =>
//   new Promise((resolve, reject) => {
//     const response = postData(`${API_URL}${END_POINTS}`, { refreshToken });
//     debugger
//   });

// eslint-disable-next-line import/prefer-default-export
export const onRefreshTokenFailed = () => {
  removeFromLocalStorage('access_token');
  removeFromLocalStorage('refresh_token');
  window.location.href = AUTH.LOGIN;
};

// const handleRefreshToken = async () => {
//   const refreshToken = getFromLocalStorage('refreshToken');
//   debugger
//   if (refreshToken) {
//     const response = await getNewTokens(refreshToken);
//     debugger
//   }
// };
