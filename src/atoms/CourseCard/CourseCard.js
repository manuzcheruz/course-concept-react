import React from 'react';

import './CourseCard.css';

function CourseCard({image, title, bgColor, main, content}) {
    return (
        <div>
            <div className="card-course" style={{height: `${!main && '160px'}`, width: `${!main && '220px'}`}}>
                <div className="body">
                    <div className="image" 
                        style={{
                            backgroundColor: `${bgColor && bgColor}`, 
                            height: `${!main && '85px'}`, 
                            width: `${!main && '220px'}`,
                            borderBottomLeftRadius: `${!main && '0px'}`,
                            borderBottomRightRadius: `${!main && '0px'}`,
                            marginTop: `${!main && '-5px'}`,
                            marginLeft: `${!main && '-5px'}`}}>
                        <div className="image-container">
                            {image}
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title">
                            {title}
                        </div>
                        <div className="bookmark">
                            <span></span>
                        </div>
                    </div>
                    {main ? 
                    <div className="bottom">
                        <div className="item">
                            <span></span>
                            4.9
                        </div>
                        <div className="item">
                            <span></span>
                            32 Hours
                        </div>
                        <div className="item">
                            <span></span>
                            English
                        </div>
                    </div>
                    : 
                    <div className="bottom-small-card">
                        <div className="cont">
                            {content}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCard;
