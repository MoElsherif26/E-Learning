import { environment } from '../../environments/environment.development';

const BASE_URL = environment.baseUrl;

export const ENDPOINTS = {
  AUTH: {
    REGISTER_STUDENT: `${BASE_URL}/Auth/RegisterStudent`,
    REGISTER_TEACHER: `${BASE_URL}/Auth/RegisterTeacher`,
    LOGIN: `${BASE_URL}/Auth/Login`,
  },
};

export const LOCALSTORAGEKEYS = {
  USER_TOKEN: 'Academia_Hub_User_Token',
};

export interface UserTokenData {
  userName: string;
  userId: string;
  role: string;
  Id: string;
  exp: number; // Unix timestamp (seconds)
}
