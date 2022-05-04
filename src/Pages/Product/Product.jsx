import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, des, img, quantity, price } = product;
    const{pd}= useParams();
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-3">
            <Card style={{ width: '18rem' }} className='product-card h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {des.slice(0, 200) + '...........'}
                    </Card.Text>
                    <Card.Text>
                        <h5>Quantity: {quantity}</h5>
                    </Card.Text>
                    <h1>$ {price}</h1>
                </Card.Body>
                <Link to={`/productDetail/${pd}`} className='button-link py-2 text-center'>Manage</Link>
            </Card>
        </div>
    );
};

export default Product;