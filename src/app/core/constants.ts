import { environment } from '../../environments/environment.development';

const BASE_URL = environment.baseUrl;

export const ENDPOINTS = {
  AUTH: {
    REGISTER_STUDENT: `${BASE_URL}/Auth/RegisterStudent`,
    REGISTER_TEACHER: `${BASE_URL}/Auth/RegisterTeacher`,
    LOGIN: `${BASE_URL}/Auth/Login`,
  },
  CLASSROOM: {
    GET_CLASSROOMS: `${BASE_URL}/Classroom/GetClassrooms`,
  },
  STUDENT_CLASSROOM: {
    ADD_STUDENT_TO_CLASSROOM: `${BASE_URL}/StudentClassroom/AddStudentToClassroom`,
    GET_CLASSROOMS_BY_STUDENT_ID: `${BASE_URL}/StudentClassroom/GetClassroomsByStudentId`
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
