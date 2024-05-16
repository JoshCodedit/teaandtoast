import React from "react";

function News(props) {  
  const shouldRender = (props.page === 1 && parseInt(props.item.id) < 5) || (props.page === 2 && parseInt(props.item.id) >= 5);

  if (!shouldRender) {
    return null;
  }

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
