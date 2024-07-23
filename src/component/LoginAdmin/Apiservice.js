// apiService.js

// import axios from 'axios';

// const BASE_URL = 'https://elmanhag.shop/backend/public/api/admin/auth/login';

// export const login = async (email, password) => {
//   try {
//     const response = await axios.post(`${BASE_URL}`, {
//       email,
//       password
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response ? error.response.data : 'Network error');
//   }
// };


// src/apiService.js
import axios from 'axios';

const BASE_URL = 'https://elmanhag.shop/backend/public/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      return error.response.data;
    } else if (error.request) {
      // No response was received
      throw new Error('No response from server');
    } else {
      // Other errors
      throw new Error(error.message);
    }
  }
};

