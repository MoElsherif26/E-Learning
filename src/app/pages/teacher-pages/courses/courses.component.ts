import { Component } from '@angular/core';
import { ICourse } from '../../../core/interfaces/ICourse';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  demoImages: string[] = [
    'imgs/courses/1.jpg',
    'imgs/courses/2.jpg',
    'imgs/courses/3.jpg',
    'imgs/courses/4.png',
    'imgs/courses/5.jpg',
  ];

  getRandomImage(course: ICourse): string {
    const index = parseInt(course.id, 10) % this.demoImages.length;
    return this.demoImages[index];
  }

  courses: ICourse[] = [
    {
      id: '1',
      name: 'Angular Basics',
      description: 'Learn the fundamentals of Angular framework.',
    },
    {
      id: '2',
      name: 'Advanced Angular',
      description: 'Deep dive into advanced concepts of Angular.',
    },
    {
      id: '3',
      name: 'Angular and RxJS',
      description: 'Integrate RxJS with Angular for reactive programming.',
    },
    {
      id: '4',
      name: 'Angular Forms',
      description:
        'Master forms in Angular, including reactive and template-driven forms.',
    },
    {
      id: '5',
      name: 'Angular Routing',
      description: 'Learn how to implement routing in Angular applications.',
    },
  ];
}
