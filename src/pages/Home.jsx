import React from 'react';
import Banner from '../components/Banner';
import BestProduct from '../components/BestProduct';
import BoxIntroduc from '../components/BoxIntroduc';
import Products from '../components/Products';
import BrandStore from '../components/BrandStore';
import News from '../components/News';

import dataProducts from '../assets/fake-data/data-products';
import newsBrand from '../assets/fake-data/news';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <BoxIntroduc/>
            <BestProduct/>
            <Products dataProducts={dataProducts}/>
            <BrandStore />
            <News dataNews={newsBrand}/>
        </div>
    )
}

export default Home
