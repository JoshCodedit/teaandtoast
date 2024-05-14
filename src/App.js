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

  const page1Style = { display: page === 1 ? '' : 'none' };
  const page2Style = { display: page === 2 ? '' : 'none' };

  const news = newsData.news.map(item => {
    const style = parseInt(item.id) < 5 ? page1Style : page2Style;

    return (
      <News
        className="news"
        key={item.id}
        item={item}
        style={style}
        imageStyle={imageStyle}
      />
    );
  });

  const reviews = reviewsData.reviews.map(item => {
    return (
      <Reviews
        className="reviews"
        key={item.id}
        item={item}
      />
    )
  })



  return (
    <div>
      <Header />
      <div className='grid-container'>
        <div className='news'>
          <h2 className='news-header'>Latest News</h2>
          {news}
        </div>
          <button className='nextButton' style={page1Style} onClick={nextPage}>Next Page</button>
          <button className='prevButton' style={page2Style} onClick={prevPage}>Prev Page</button>
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
  )

}

export default App;
