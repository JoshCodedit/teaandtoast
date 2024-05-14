import React, { useState } from "react";

function Reviews(props) {
    const reviewStyle = {
        width: '90%',
        maxHeight: '450px',
        objectFit: 'cover'
    };

    const [isHovered, setIsHovered] = useState(false);


    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    // Conditionally apply styles based on hover state
    const pStyle = {
        display: isHovered ? "" : "none" // Inverted logic to hide when hovered
    };

    return (
        <div className="reviews-item">
            <div className="image-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <a href={props.item.url} >
                    <img 
 
                        className="reviews-image" 
                        src={props.item['image-url']} 
                        alt={props.item.alt} 
                        style={reviewStyle} 
                    />
                <p className="artist" style={pStyle}>{props.item.artist}</p>
                <p className="album" style={pStyle} >{props.item.album}</p>
                <div className="reviewed" style={pStyle} >
                    <span className="grey">Reviewed by</span><p>{props.item.reviewed}</p>
                </div>
                </a>
            </div>
        </div>
    );
}

export default Reviews;
