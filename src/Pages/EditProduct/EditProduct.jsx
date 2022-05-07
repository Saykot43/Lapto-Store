
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SingleHookProduct } from '../CustomHook/SingleHookProduct';
import { useAuthState } from 'react-firebase-hooks/auth';

import './EditProduct.css'
import auth from '../../Firebase/firebase.init';

const EditProduct = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const [product, setProduct] = SingleHookProduct(id);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();

    const handleUpdate = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const des = event.target.des.value;
        // const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;

        //     console.log(name, img, des, quantity, supplier, price);
        const url = `https://laptopstorebd.herokuapp.com/update/${id}`
        console.log(url);
        console.log(url);
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                name, img, des, supplier, price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setData(data));



        toast('Product Update succesfully')
        // event.target.reset();
        navigate('/productList');

    }

    const Name = (e) => {

        const {name, ...rest}= product;
        const newName = e.target.value;
        const newProduct = {name: newName, ...rest};
        setProduct(newProduct);

    }
    const Image = (e) => {

        const {img, ...rest}= product;
        const newImg = e.target.value;
        const newImage = {img: newImg, ...rest};
        setProduct(newImage);

    }
    const Des = (e) => {

        const {des, ...rest}= product;
        const newDes = e.target.value;
        const newDesc = {des: newDes, ...rest};
        setProduct(newDesc);

    }
    const Sup = (e) => {

        const {supplier, ...rest}= product;
        const newSup = e.target.value;
        const newSupp = {supplier: newSup, ...rest};
        setProduct(newSupp);

    }
    
    const Price = (e) => {

        const {price, ...rest}= product;
        const newPrice = e.target.value;
        const newPric = {price: newPrice, ...rest};
        setProduct(newPric);

    }

    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>{product.name}</h3>
                        <p>You can Update the product</p>

                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Update Product</h3>
                                <div className="row register-form">
                                    <Form onSubmit={handleUpdate}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name:</Form.Label>
                                            <Form.Control onChange={Name} type="text" name='name' value={product.name} placeholder="Enter product name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control onChange={Image} type="text" name='img' value={product.img} placeholder="Enter product photo url" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control as="textarea" rows={3} type="text" name='des' onChange={Des} value={product.des} placeholder="Descriptions" required />
                                        </Form.Group>
                                        {/* <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="number" name='quantity' onChange={Quantity} value={product.quantity} placeholder="Quantity" required />
                                        </Form.Group> */}
                                        <Form.Group className="mb-3" controlId="formBasicSupplier">
                                            <Form.Label>Supplier</Form.Label>
                                            <Form.Control type="text" name='supplier' onChange={Sup} value={product.supplier} placeholder="Supplier" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" name='price' onChange={Price} value={product.price} placeholder="Price" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Update product
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

export default EditProduct;