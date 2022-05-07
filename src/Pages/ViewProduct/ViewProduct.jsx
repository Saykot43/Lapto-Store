import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { SingleHookProduct } from '../CustomHook/SingleHookProduct';

const ViewProduct = () => {
    const {id} =useParams();
    const [product, setProduct] =SingleHookProduct(id);
    return (
        <div>
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
                </Card.Body>
            </Card>
            </div>
        </div>
        </div>
    );
};

export default ViewProduct;