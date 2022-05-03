import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import image1 from '../../image/image1.png'
import image2 from '../../image/image2.png'
import image3 from '../../image/image3.png'

const Cover = () => {
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
        </div>
    );
};

export default Cover;