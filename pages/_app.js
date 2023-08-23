import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import SimpleReactLightbox from 'simple-react-lightbox';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font awesome
import '/public/assets/library/fontawesome/css/all.min.css';

// Linea icons
import '/public/assets/library/linea/arrows/styles.css';
import '/public/assets/library/linea/basic/styles.css';
import '/public/assets/library/linea/ecommerce/styles.css';
import '/public/assets/library/linea/software/styles.css';
import '/public/assets/library/linea/weather/styles.css';

// Animate
import '/public/assets/library/animate/animate.css';

// Stylesheet
import '/public/assets/css/style.css';
import '/public/assets/css/media.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {    
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    // Loading
    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    // Scroll
    useEffect(() => {
        let unmounted = false;

        if (!unmounted) {      
            // Page loader
            const loader = document.querySelector('.page-loader');

            if (loader) {
                setTimeout(() => {				
                    loader.style.display = 'none';
                }, 300);
            }

            // To top
            const toTop = document.querySelector('.to-top');

            // Scroll event
            window.addEventListener('scroll', function() {
                const mainMenu = document.querySelector('.main-menu-area');
                const pos = window.scrollY;

                // Fixed menu
                if (mainMenu) {
                    if (pos >= 100) {
                        mainMenu.classList.add('fixed-menu', 'animate', 'slideInDown');
                    } else {
                        mainMenu.classList.remove('fixed-menu', 'animate', 'slideInDown');
                    }
                }

                // Scroll to top button
                if (pos >= 500) {
                    toTop.classList.add('fixed-totop');
                } else {
                    toTop.classList.remove('fixed-totop');
                }
            });

            // Scroll spy
            if (router.asPath.split('#').length > 1) {                
                const sections = document.querySelectorAll('section[id]');
                
                window.addEventListener('scroll', function() {                    
                    const pos = window.scrollY;   
                    
                    if (pos > 0) {
                        sections.forEach(el => {
                            if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                                const getId = el.getAttribute('id');

                                document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {                                                            
                                    const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);
                                    
                                    if (activeLink) {
                                        link.classList.remove('active');
                                        activeLink.classList.add('active');
                                    }
                                });
                            }
                        });
                    } else {
                        const link = document.querySelector(`.nav-item`);
                        link.classList.remove('active');

                        const activeLink = document.querySelector(`.nav-item a[href^="/#top-page"]`);
                        activeLink.classList.add('active');
                    }
                });
            } else {
                window.addEventListener('scroll', function() {
                    document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                        link.classList.remove('active');
                    });
                });
            }
        }

        return () => (unmounted = true);
    });

    return  <SimpleReactLightbox>
                <Component {...pageProps} />
            </SimpleReactLightbox>;
}