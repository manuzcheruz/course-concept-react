import React from 'react';

import './CourseCard.css';

function CourseCard(props) {
    return (
        <div>
            <div className="card-course">
                <div className="body">
                    <div className="image">
                        <div className="image-container">
                            {props.image}
                        </div>
                    </div>
                    <div className="middle">
                        <div className="title">
                            3D character Design - <br /> Blender
                        </div>
                        <div className="bookmark">
                            <span></span>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default CourseCard;
