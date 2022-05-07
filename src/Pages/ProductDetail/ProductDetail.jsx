import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SingleHookProduct } from '../CustomHook/SingleHookProduct';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    
    const [product, setProduct] = SingleHookProduct(id);

    const handelDelivery = () => {
        const newQuantity = parseInt(product.quantity) - 1;
        
        fetch(`https://laptopstorebd.herokuapp.com/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                newQuantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }
    return (
        <div className='container text-center'>
            <div>
            <Card className='mx-auto' style={{ width: '20rem' }}>
                <Card.Img className='pt-3' variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.des}
                    </Card.Text>
                    <Card.Text>
                        <p>Quantity: {product.quantity}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Supplier:{product.supplier}</p>
                    </Card.Text>
                    <Card.Text>
                        <p>Price: {product.price} $</p>
                    </Card.Text>
                    <Button onClick={() => handelDelivery(id)} className='text-center' variant="primary">Deliviery</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default ProductDetail;