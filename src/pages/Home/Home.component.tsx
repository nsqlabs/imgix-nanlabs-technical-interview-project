import MainSection from 'pages/Home/sections/MainSection';
import TopSection from 'pages/Home/sections/TopSection';
import React from 'react';
import './Home.styles.css';

const Home = () => {
  return (
    <div className='home-layout'>
      <TopSection />
      <MainSection />
    </div>
  );
};

export default Home;
