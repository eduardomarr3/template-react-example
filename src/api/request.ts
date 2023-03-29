import axios from 'axios';
import { BASE_PATH, CLIENT_ID } from '~/utils';
import {
  addAuthHeaders,
  successResponse,
  verifyExpiredToken,
} from './interceptors';

export const request = axios.create({
  baseURL: BASE_PATH,
  headers: { client_id: CLIENT_ID || '' },
  timeout: 30000, // 30 seconds timeout
});

request.interceptors.response.use(successResponse, verifyExpiredToken);

request.interceptors.request.use(addAuthHeaders);

export default request;
