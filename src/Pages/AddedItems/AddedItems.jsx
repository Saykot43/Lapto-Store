import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
// import axiosPrivate from '../axios/axiosPrivate';

const AddedItems = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [items, setItems] = useState([]);
    // const navigate = useNavigate();
    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/item?email=${email}`;
            const { data } = await axios.get(url);
            console.log(data);
            setItems(data)
            // try {
            //     const {data} = await axiosPrivate.get(url);
            //     setItems(data);
            // } catch (error) {
            //     console.log(error.message);
            //     if(error.response.status === 401 || error.response.status === 403){
            //         signOut(auth)
            //         // navigate('/login')
            //     }
            // }   
        }
        getItems()
    }, [user])
    return (
        <div>
            <h2 className='py-3 text-center text-primary'>Total items: {items.length}</h2>
            <Table striped bordered hover variant="dark" className='container'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {
                    items.map(item =>
                        <tbody key={item._id}>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.des}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.supplier}</td>
                                <td>{ <img className='border rounded-circle custom-size' src={item.img} alt="" /> }</td>

                            </tr>
                        </tbody>
                    )
                }
            </Table>
        </div>
    );
};

export default AddedItems;
