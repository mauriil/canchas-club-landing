import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';

const ScreenShotCarrousel = () => {
    const { scrollRef } = useSnapCarousel();
    return (
        <ul
            ref={scrollRef}
            style={{
                display: 'flex',
                overflow: 'auto',
                scrollSnapType: 'x mandatory'
            }}
        >
            <li
                style={{
                    fontSize: '50px',
                    width: '250px',
                    height: '250px',
                    flexShrink: 0,
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img src="/images/screenshots/screenshot-1.jpg" />
            </li>
            <li
                style={{
                    fontSize: '50px',
                    width: '250px',
                    height: '250px',
                    flexShrink: 0,
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img src="/images/screenshots/screenshot-1.jpg" />
            </li>
            <li
                style={{
                    fontSize: '50px',
                    width: '250px',
                    height: '250px',
                    flexShrink: 0,
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img src="/images/screenshots/screenshot-1.jpg" />
            </li>
        </ul>
    );
};

export default ScreenShotCarrousel;