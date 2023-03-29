import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isEmpty } from '~/modules';
import { Routes } from '~/routes';
import { StorageService } from '~/services';
import { ExpiredSessionError } from '~/utils';
import { browserHistory } from '../App';

interface CustomRequest {
  authorization?: string;
}

export const successResponse = (response: AxiosResponse): AxiosResponse =>
  response;

export const addAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token: Token | null = StorageService.getToken();
  const tid = new Date().getUTCMilliseconds().toString();
  if (!token || isEmpty(token)) {
    return config;
  }
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token?.access_token}`,
      tid,
    } as any,
  };
};

export const verifyExpiredToken = (
  error: ErrorResponse,
): ExpiredSessionError | ErrorResponse => {
  const expiredSessionError = 401;
  if (error?.response?.status === expiredSessionError) {
    StorageService.setToken(null);
    browserHistory.push(Routes.LOGIN);
    throw new ExpiredSessionError();
  }
  throw error;
};
