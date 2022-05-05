import React, { useEffect, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams();
    
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const handelDelivery = () => {
        const newQuantity = parseInt(product.quantity) - 1;
        
        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                newQuantity
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => setProduct(json));
    }
    return (
        <div className='container text-center my-3 d-flex '>
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
            <div className='m-5'>
                <Form>
                    <h3>Stock Manage</h3>
                    <input type='text' name='' />
                    
                </Form>
            </div>
        </div>
    );
};

export default ProductDetail;