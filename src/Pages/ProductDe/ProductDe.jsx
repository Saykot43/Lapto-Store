import React from 'react';
import './ProductDe.css'
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const ProductDe = ({ product }) => {
    const { name, img, quantity, price } = product;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <img className='border rounded-circle custom-size' src={img} alt="" />
            </td>
            <td>{price} $</td>
            <td>
                <div className="d-flex">
                    <button className='btn'><span className='edit-btn'><FaEdit /> </span></button>
                    <button className='btn'><span className='delete-btn'><AiFillDelete /></span></button>
                </div>
            </td>
        </tr>
    );
};

export default ProductDe;