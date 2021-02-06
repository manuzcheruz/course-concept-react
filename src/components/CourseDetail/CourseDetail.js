import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import ChapterCard from '../../atoms/ChapterCard/ChapterCard';
import { Basket, Group, Heart, Lock, Play, Star } from '../../assets/icons'
import { Faq, Snow, Walk, Work } from '../../assets/illustrators'

import './CourseDetail.css';
import Navbar from '../Navbar/Navbar';

function CourseDetail() {
    return (
        <Aux>
            <Navbar />
            <div className="bottom">
                <span>
                    <Basket height={50} color='#FF4886' />
                </span>
            </div>
            <div className="bottom1">
                <div className="icons">
                    <div className="item">
                        <span className="icon">
                            <Group height={20} color='#C39366' />
                        </span>
                        <span className="text">
                            28K
                        </span>
                    </div>
                    <div className="item" style={{textAlign: 'center'}}>
                        <span className="icon">
                            <Star height={20} color='#C39366' />
                        </span>
                        <span className="text">
                            5.0
                        </span>
                    </div>
                    <div className="item" style={{textAlign: 'right'}}>
                        <span className="icon">
                            <Heart height={20} color='#C39366' />
                        </span>
                        <span className="text">
                            18K
                        </span>
                    </div>
                </div>
            </div>
            <div className="bottom2"></div>
            <div className="bottom3"></div>
            <div className="bottom4"></div>
            <div className="bottom5">
                <span>
                    <Faq height={220} width={330}/>
                </span>
            </div>
            <div className="bottom6">
                <div className="top-content">
                    <div className="title">
                        Character Design 3D C4D
                    </div>
                    <div className="cost">
                        $25.21
                    </div>
                </div>
                <div className="middle-content">
                    <div className="title">
                        About this course
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at risus arcu. Suspendisse pellentesque, dui et viverra elementum, dui sem aliquam ligula, in vestibulum mi sapien sed lorem. Sed varius dui nec ex rhoncus, et mattis urna volutpat.
                    </div>
                </div>
                <div className="icon-arrow-down">

                </div>
                <div className="chapters">
                    <ChapterCard 
                        image={<Snow height={50} width={70} />}
                        title='01. Introduction'
                        time='2 min 5 sec'
                        icon={<Play height={30} color='#FF4886' />} />
                    <ChapterCard 
                        image={<Walk height={50} width={70} />}
                        title='02. Basics of Animation'
                        time='13 min 20 sec'
                        icon={<Lock height={20} color='grey' />} />
                    <ChapterCard 
                        image={<Faq height={50} width={70} />}
                        title='03. Dive deeper'
                        time='1 Hour 10 min'
                        icon={<Lock height={20} color='grey' />} />
                    <ChapterCard 
                        image={<Work height={50} width={70} />}
                        title='04. Wrap Up'
                        time='10 min 7 sec'
                        icon={<Lock height={20} color='grey' />} />
                </div>
            </div>
            <div className="detail">
                
            </div>
        </Aux>
    )
}

export default CourseDetail;
