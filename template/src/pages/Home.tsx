import React from 'react';
import deathStar from "../death-star.png";
import EpisodesContainer from "../containers/EpisodesContainer";

const Home = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={deathStar} alt="death star" />
        <EpisodesContainer/>
      </header>
    </div>
  );
};

export default Home;
