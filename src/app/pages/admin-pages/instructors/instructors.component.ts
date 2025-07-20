import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IInstructor } from '../../../core/interfaces/IInstructor';

@Component({
  selector: 'app-instructors',
  imports: [NgIf, NgFor],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss',
})
export class InstructorsComponent {
  // Array of fake instructor data
  instructors: IInstructor[] = [
    {
      id: 1,
      name: 'Dr. Evelyn Reed',
      title: 'Lead AI & Machine Learning Instructor',
      avatarUrl: 'https://i.pravatar.cc/150?img=1', // Using a placeholder image service
      bio: 'Evelyn has a Ph.D. in Computer Science and over 15 years of experience in building large-scale machine learning models for top tech companies.',
      specialties: ['Machine Learning', 'Deep Learning', 'NLP'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 2,
      name: 'Marcus Chen',
      title: 'Senior Data Science Expert',
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
      bio: 'Marcus is a data visualization guru who makes complex data understandable and beautiful. He is the author of the best-selling book "Data Storytelling".',
      specialties: ['Data Visualization', 'Python', 'Statistics', 'Pandas'],
      socialLinks: {
        linkedin: '#',
      },
    },
    {
      id: 3,
      name: 'Aisha Khan',
      title: 'Cloud & DevOps Specialist',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      bio: 'Aisha specializes in deploying and managing AI applications on the cloud. She holds multiple certifications from AWS, Google Cloud, and Azure.',
      specialties: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      socialLinks: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 4,
      name: 'Leo Martinez',
      title: 'Generative AI Prompt Engineer',
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
      bio: 'Leo is at the forefront of generative AI, mastering the art and science of prompt engineering to unlock the full potential of large language models.',
      specialties: ['Prompt Engineering', 'LLMs', 'LangChain'],
      socialLinks: {
        twitter: '#',
      },
    },
  ];

  constructor() {}
}
