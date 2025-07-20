export interface IInstructor {
  id: number;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  specialties: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
}
