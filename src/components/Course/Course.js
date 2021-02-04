import React from 'react';
import CourseCard from '../../atoms/CourseCard/CourseCard';
import { Bike, Work, Snow, Faq, Walk } from '../../assets/illustrators'
 
import './Course.css';

function Course() {
    return (
        <div className="course">
            <div className="course-wrapper">
                <div className="top">
                    What you want to <br />
                    Learn Today?
                </div>
                <div className="top-title">
                    <div className="left">
                        Popular Courses
                    </div>
                    <div className="right">
                        view all
                    </div>
                </div>
                <div className="popular-scroll">
                    <CourseCard image={<Walk height={150} />} />
                    <CourseCard image={<Faq height={150} />} />
                    <CourseCard image={<Snow height={150} />} />
                </div>
                <div className="top-title">
                    <div className="left">
                        Latest Courses
                    </div>
                    <div className="right">
                        view all
                    </div>
                </div>
                <div className="popular-scroll">
                    <CourseCard image={<Faq height={150} />} />
                    <CourseCard image={<Bike height={100} />} />
                    <CourseCard image={<Work height={150} />} />
                </div>
            </div>
        </div>
    )
}

export default Course;
