import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './ProductAdd.css'

const ProductAdd = () => {

    const handleUpload = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const des = event.target.des.value;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        toast('Product added succesfully')
        event.target.reset();

        const url = `http://localhost:5000/productAdd`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, img, des, quantity, price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You can add product</p>

                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Add New Product</h3>
                                <div className="row register-form">
                                    <Form onSubmit={handleUpload}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control type="text" name='name' placeholder="Enter product name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control type="text" name='img' placeholder="Enter product photo url" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control type="text" name='des' placeholder="Descriptions" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="text" name='quantity' placeholder="Quantity" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" name='price' placeholder="Price" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Add product
                                        </Button>
                                    </Form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductAdd;