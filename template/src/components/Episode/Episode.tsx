import React from 'react';
import './Episode.css';

type Props = {
  title: string;
  openingCrawl: string;
}

const Episode = ({title, openingCrawl}: Props): JSX.Element => {
  return (
    <div className="episode">
      <p className="ep-title">{title}</p>
      <p className="ep-opening-crawl">{openingCrawl}</p>
    </div>
  );
};

export default Episode;
