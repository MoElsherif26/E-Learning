import { Component } from '@angular/core';
import { IStudent } from '../../../core/interfaces/IStudent';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  // Fake data for the students list
  students: IStudent[] = [
    {
      id: 101,
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      email: 'alice.j@example.com',
      enrollmentDate: '2023-09-01',
      currentCourse: 'Intro to Generative AI',
      progress: 75,
    },
    {
      id: 102,
      name: 'Bob Williams',
      avatarUrl: 'https://i.pravatar.cc/150?img=6',
      email: 'bob.w@example.com',
      enrollmentDate: '2023-10-15',
      currentCourse: 'Advanced Prompt Engineering',
      progress: 45,
    },
    {
      id: 103,
      name: 'Charlie Brown',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
      email: 'charlie.b@example.com',
      enrollmentDate: '2023-08-20',
      currentCourse: 'AI for Developers',
      progress: 92,
    },
    {
      id: 104,
      name: 'Diana Miller',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
      email: 'diana.m@example.com',
      enrollmentDate: '2023-11-05',
      currentCourse: 'Intro to Generative AI',
      progress: 20,
    },
    {
      id: 105,
      name: 'Ethan Davis',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      email: 'ethan.d@example.com',
      enrollmentDate: '2023-09-10',
      currentCourse: 'Machine Learning Operations (MLOps)',
      progress: 100,
    },
  ];

  constructor() {}
}
