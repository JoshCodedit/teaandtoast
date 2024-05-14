import React from "react"


function News(props) {

  
    return (
      <div className="article" style={props.style}>
        <a href={props.item.url}>
          <img className="news-image" style={props.imageStyle} src={props.item['image-url']} alt={props.item.alt}/>
          <p className="news-headline">{props.item.headline}</p>
          <p className="news-date">{props.item.date}</p>
        </a>
      </div>
    );
  }
  
  
  export default News;
  