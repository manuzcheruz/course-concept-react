import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import ChapterCard from '../../atoms/ChapterCard/ChapterCard';
import { Lock, Play } from '../../assets/icons'
import { Faq, Snow, Walk, Work } from '../../assets/illustrators'

import './CourseDetail.css';

function CourseDetail() {
    return (
        <Aux>
            <div className="bottom1"></div>
            <div className="bottom2"></div>
            <div className="bottom3"></div>
            <div className="bottom4"></div>
            <div className="bottom5"></div>
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
                        icon={<Play height={30} color='red' />} />
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
