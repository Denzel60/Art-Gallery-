import './Home.css'
// import { Masonry } from 'react-masonry'
// import images from '../../data/images.js';
// import React from 'react';
import Hero from './Hero.jsx';
import image from './image.jsx';

function Home() {

    return (
        <div className='home'>
            <Hero />
            <image />
        </div >
    );
}

export default Home;
