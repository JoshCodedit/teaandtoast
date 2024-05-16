import './App.css';
import React from 'react';
import Header from "./Header"
import News from "./News"
import newsData from "./newsData"
import Reviews from "./Reviews"
import reviewsData from "./reviewsData"
import RecordStoreSpotlight from "./RecordStoreSpotlight"
import NewsletterForm from './NewsletterForm';

function App() {
  const imageStyle = {
    width: '300px',
    maxHeight: '200px',
    // objectFit: 'cover'
  };

  // Latest News
  const [page, setPage] = React.useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
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
        {page === 1 && (
          <button className='nextButton' onClick={nextPage}>Next Page</button>
        )}
        {page === 2 && (
          <button className='prevButton' onClick={prevPage}>Prev Page</button>
        )}
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

export default App