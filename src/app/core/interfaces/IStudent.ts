// Interface for type-checking the Student object
export interface IStudent {
  id: number;
  name: string;
  avatarUrl: string;
  email: string;
  enrollmentDate: string; // Using string for simplicity, can be Date object
  currentCourse: string;
  progress: number; // A value from 0 to 100
}
