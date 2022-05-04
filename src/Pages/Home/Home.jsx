import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { CustomHook } from '../CustomHook/CustomHook';
import Product from '../Product/Product'
import Cover from './Cover';

const Home = () => {
    const [products] = CustomHook([]);

    return (
        <div className='container'>
            <Cover />
            <section>
                <div><h1 className='text-center text-primary container'>All product</h1></div>
                <div className='container'>
                    <div className="row">
                        {
                            products.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            />)
                        }
                    </div>
                    <div className="mx-auto text-end">
                        <Link to='/productList' className='btn btn text-white m-3 p-3 bg-danger border rounded-pill'>Product Inventory</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;