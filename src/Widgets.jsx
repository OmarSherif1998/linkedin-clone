import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      <h2>
        {newsArticle(
          'React is the most popular JS framework',
          'top news - 25684 readers'
        )}
        {newsArticle(
          'Teslas shares sky rockets after Elons latest tweets',
          '11984 readers'
        )}
        {newsArticle('Angular is not it anymore', '2548 readers')}
        {newsArticle(
          'Meta is looking to invest in indie companies',
          '1184 readers'
        )}
      </h2>
    </div>
  );
}

export default Widgets;
