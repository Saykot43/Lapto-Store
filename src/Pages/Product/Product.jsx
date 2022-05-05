import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, des, img, quantity, price, supplier } = product;
    const navigate = useNavigate();

    const manageNavigate =id=>{
        navigate(`/productDetail/${id}`)
    }
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-3">
            <Card style={{ width: '18rem' }} className='product-card py-2 h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title><hr></hr>
                    <Card.Text>
                        {des}
                    </Card.Text>
                    <Card.Text>
                        <h5>Quantity: {quantity}</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>Supplier: {supplier}</h5>
                    </Card.Text>
                    <h3>$ {price}</h3>
                </Card.Body>
                <Button onClick={()=>manageNavigate(product._id)} className='button-link py-2 text-center'>Manage</Button>
            </Card>
        </div>
    );
};

export default Product;