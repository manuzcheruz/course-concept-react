import React from 'react';

import './ChapterCard.css';

function ChapterCard({image, title, time, icon}) {
    return (
        <div className="card-chapter">
            <div className="body">
                <div className="image">
                    {image}
                </div>
                <div className="title">
                    <div className="main">
                        {title}
                    </div>
                    <div className="sub">
                        {time}
                    </div>
                </div>
                <div className="btn">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default ChapterCard;
