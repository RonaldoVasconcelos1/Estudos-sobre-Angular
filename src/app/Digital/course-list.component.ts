import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {

                id: 1,
                name: 'Angular e forms',
                imagemURL: '',
                price: 99.99,
                code: 'ggg-760',
                duration: 120,
                rating: 5.4,
                releaseDate: 'March, 02, 2020'
            },
            {
                id: 2,
                name: 'Angular',
                imagemURL: '',
                price: 99.99,
                code: 'ggg-760',
                duration: 200,
                rating: 5.0,
                releaseDate: 'April, 10, 2020'
            }
        ];
    }
}