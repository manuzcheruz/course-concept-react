import React from 'react';
import { Bookmark, Clock, Globe, Play, Star } from '../../assets/icons';

import './CourseCard.css';

function CourseCard({image, title, bgColor, main, content, margin}) {
    return (
        <div>
            <div className="card-course" style={{height: `${!main && '160px'}`, width: `${!main && '220px'}`, marginRight: `${margin && margin}` }}>
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
                        <div className="bookmark" style={{textAlign: 'right', paddingRight: '5px', paddingTop: '5px'}}>
                            {main ? 
                            <span>
                                <Bookmark height={25} color='#FF4886' />
                            </span>
                            : 
                            <span>
                                <Play height={20} color='#FF4886' />
                            </span>
                            }
                        </div>
                    </div>
                    {main ? 
                    <div className="bottom-card">
                        <div className="item">
                            <span style={{paddingRight: '3px'}}>
                                <Star color='#ADADAD' height={17} />
                            </span>
                            4.9
                        </div>
                        <div className="item">
                            <span style={{paddingRight: '3px'}}>
                                <Clock color='#ADADAD' height={17} />
                            </span>
                            32 Hours
                        </div>
                        <div className="item">
                            <span style={{paddingRight: '3px'}}>
                                <Globe color='#ADADAD' height={17} />
                            </span>
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
