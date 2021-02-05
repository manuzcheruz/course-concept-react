import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import CourseCard from '../../atoms/CourseCard/CourseCard';
import { Bike, Work, Snow, Faq, Walk } from '../../assets/illustrators';
 
import './Course.css';

function Course() {
    return (
        <Aux>
            <div className="background-top"></div>
            <div className="background-patch"></div>
            <div className="background-bottom"></div>
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
                        <CourseCard 
                                image={<Walk height={150} width={220} />}
                                title='3D character Design - Blender' 
                                bgColor='#34AAFA'
                                main />
                        <CourseCard 
                                image={<Faq height={150} width={220} />}
                                title='Character Design 3D C4D' 
                                bgColor="#F1ADAC"
                                main />
                        <CourseCard 
                                image={<Snow height={150} width={220} />}
                                title='Basic 3d Animation Tutorial' 
                                main
                                bgColor="#8588CE"  />
                    </div>
                    <div className="top-title">
                        <div className="left" style={{color: 'black'}}>
                            Latest Courses
                        </div>
                        <div className="right">
                            view all
                        </div>
                    </div>
                    <div className="popular-scroll">
                        <CourseCard 
                                image={<Bike height={80} width={230} />}
                                title='Basic 3d animation' 
                                content='Start basics of 3d animation with this course'
                                bgColor="#8588CE" />
                        <CourseCard 
                                image={<Faq height={80} width={230} />}
                                title='Animated 3d' 
                                content='Learn how to animate 3d elements'
                                bgColor='#FD9BC1' />
                        <CourseCard image={<Work 
                                height={85} width={200} />} 
                                title='Basic 3d animation' 
                                content='Start basics of 3d animation with this course'
                                bgColor="#8588CE"/>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Course;
