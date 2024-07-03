import './Home.css'
// import { Masonry } from 'react-masonry'
import images from '../../data/images.js';
import React from 'react';
import Hero from './Hero.jsx';
import Image from './Image.jsx';

function Home() {

    return (
        <React.Fragment>
            <div className='home'>
                <Hero />
                <section className='layout'>
                    {images.map((current, i) => {
                        return <Image key={i} image={current.image} />
                    })}
                </section>
            </div >
        </React.Fragment>
    );
}

export default Home;
