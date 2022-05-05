import React from 'react';
import './ProductDe.css'
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { CustomHook } from '../CustomHook/CustomHook';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const ProductDe = ({ product }) => {
    const [user] = useAuthState(auth);
    console.log(user);
    const { name, img, quantity, supplier, price } = product;
    const navigate = useNavigate();
    const edit = id =>{
        navigate(`/editProduct/${id}`);
    }
    const [products, setProducts] = CustomHook();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure delete this product?');
        if(proceed){
            const url = `http://localhost:5000/delete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                toast("Delete this Product")
                const rest = products.filter(product => product._id !== id);
                setProducts(rest);
            })
        }
    }

    return (
        <tr>

            <td>{user.displayName}</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <img className='border rounded-circle custom-size' src={img} alt="" />
            </td>
            <td>{price} $</td>
            <td>{supplier}</td>
            <td>
                <div className="d-flex">
                    <button onClick={()=>edit(product._id)} className='btn'><span className='edit-btn'><FaEdit /> </span></button>
                    <button onClick={()=>handleDelete(product._id)} className='btn'><span className='delete-btn'><AiFillDelete /></span></button>
                </div>
            </td>
        </tr>
    );
};

export default ProductDe;