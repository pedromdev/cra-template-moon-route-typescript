import React from 'react';
import './Episodes.css';

type Props = {
  children: any
}

const Episodes = ({children}: Props): JSX.Element => {
  return (
    <section className="episodes">
      <div className="eps-crawl">
        {children}
      </div>
    </section>
  );
};

export default Episodes;
