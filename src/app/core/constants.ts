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
    ADD_CLASSROOM: `${BASE_URL}/Classroom/AddClassroom`,
  },
  STUDENT_CLASSROOM: {
    ADD_STUDENT_TO_CLASSROOM: `${BASE_URL}/StudentClassroom/AddStudentToClassroom`,
    GET_CLASSROOMS_BY_STUDENT_ID: `${BASE_URL}/StudentClassroom/GetClassroomsByStudentId`,
  },
  TEACHER_CLASSROOM: {
    ADD_TEACHER_TO_CLASSROOM: `${BASE_URL}/TeacherClassroom/AddTeacherToClassroom`,
    GET_CLASSROOM_BY_TEACHER_ID: `${BASE_URL}/TeacherClassroom/GetClassroomByTeacherId`,
  },
  SUBJECT: {
    ADD_SUBJECT: `${BASE_URL}/Subject/AddSubject`,
    GET_SUBJECTS: `${BASE_URL}/Subject/GetSubjects`,
  },
  STUDENT: {
    GET_STUDENTS: `${BASE_URL}/Student/GetStudents`,
  },
  TEACHER: {
    GET_TEACHERS: `${BASE_URL}/Teacher/GetTeachers`,
  },
};

export const ROUTES = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
  },
  STUDENT: {
    MY_CLASSROOMS: '/student/my-classrooms',
    CLASSROOMS: '/student/classrooms',
  },
  TEACHER: {
    CLASSROOM: '/teacher/classroom',
  },
  ADMIN: {
    STUDENTS: '/admin/students',
    TEACHERS: '/admin/teachers',
    CLASSROOMS: '/admin/classrooms',
    SUBJECTS: '/admin/subjets',
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
