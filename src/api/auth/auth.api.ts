import { ResponseError } from '~/utils';
import request from '../request';

export const login = async ({
  email,
  password,
}: Credentials): Promise<Token> => {
  try {
    const { data } = await request.post('/login', {
      username: email,
      password,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};

export const fetchUser = async (): Promise<User> => {
  try {
    const { data } = await request.get('/profile');
    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};
