export interface RegisterRequestDto {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  name: string;
  nationalId: string;
  address: string;
  gender: string;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface AddStudentToClassroomRequestDto {
  studentId?: string;
  classroomId: number;
}

export interface AddTeacherToClassroomRequestDto {
  teacherId?: string;
  classroomId: number;
}

export interface AddSubjectRequestDto {
  name: string;
}

export interface AddClassroomRequestDto {
  subjectId: number;
  name: string;
  description: string;
}
