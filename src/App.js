import reviewsData from "./data/reviewsData"
import newsData from "./data/newsData"
import React, { useState } from "react";
import News from "./components/News"; // Adjust the import path as necessary
import Header from "./components/Header"; // Adjust the import path as necessary
import Reviews from "./components/Reviews"; // Adjust the import path as necessary
import RecordStoreSpotlight from "./components/RecordStoreSpotlight"; // Adjust the import path as necessary
import NewsletterForm from "./components/NewsletterForm"; // Adjust the import path as necessary

function App() {
  const imageStyle = {
    width: '300px',
    maxHeight: '200px',
    // objectFit: 'cover'
  };

  const [page, setPage] = useState(1);

  const changePage = () => {
    setPage(page === 1 ? 2 : 1);
  };

  const news = newsData.news.map(item => (
    <News
      className="news"
      key={item.id}
      item={item}
      page={page}
      style={item.style}
      imageStyle={imageStyle}
    />
  ));

  const reviews = reviewsData.reviews.map(item => (
    <Reviews
      className="reviews"
      key={item.id}
      item={item}
    />
  ));

  return (
    <div>
      <Header />
      <div className='grid-container'>
        <div className='news'>
          <h2 className='news-header'>Latest News</h2>
          {news}
        </div>
          <button 
            className={page === 1 ? 'nextButton' : 'prevButton'} 
            onClick={changePage}>
            {page === 1 ? 'Next Page' : 'Prev Page'}
          </button>
        <div className='reviews'>
          <h2 className='reviews-header'>Latest Reviews</h2>
          {reviews}
        </div>
        <div className='record-stores'>
          <h2 className='store-header'>Record Store Spotlight</h2>               
          <RecordStoreSpotlight
            imageStyle={imageStyle}
          />
        </div>
        <div className='newsletter'>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}

export default App;
