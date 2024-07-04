import './Home.css'
import "https://unpkg.com/@appnest/masonry-layout?module";
import images from '../../data/images.js';
import React from 'react';
import Hero from './Hero.jsx';
import Image from './Image.jsx';

function Home() {
    return (
        <React.Fragment>
            <div className='home'>
                <Hero />

                <masonry-layout cols="5" maxcolwidth="400" gap="10" debounce="500">
                    {images.map((current, i) => {
                        return <Image key={i} image={current.image} />
                    })}
                </masonry-layout>
            </div >
        </React.Fragment>
    );
}

export default Home;
