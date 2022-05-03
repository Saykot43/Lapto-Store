
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from '../../image/image1.png'
import image2 from '../../image/image2.png'
import image3 from '../../image/image3.png'
import { CustomHook } from '../CustomHook/CustomHook';
import Product from '../Product/Product'

const Home = () => {
    const [products] = CustomHook([]);
    return (
        <div className='container'>
            <section className='mb-5'>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
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