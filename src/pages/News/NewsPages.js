import React from 'react';
import NewsHero from './NewsHero/NewsHero';
import Homes from './MainContent/Homes/Homes';
import Header from '../../components/header/Header';
import Footer from '../../components/Footer/Footer';

const NewsPages = () => {
    return (
        <div>
            <Header />
            <NewsHero />
            <Homes />
            <Footer />
        </div>
    );
};

export default NewsPages;