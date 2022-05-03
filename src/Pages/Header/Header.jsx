import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }
    return (
                <Navbar className='py-2 fs-4 navbar-bg' sticky='top' expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold text-danger logo'>Laptop Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '350px' }}
                        navbarScroll>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "active-link" : "link"} to="/home">Home</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "active-link" : "link"} to="/productAdd">Product upload</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "active-link" : "link"} to="/productList">Product Inventory</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "active-link" : "link"} to="/blog">Blog</NavLink>
                                {
                                    user ?
                                        <p className='btn btn-gray font-weight-bold' onClick={handleSignout}><span className='logout'>Log out</span></p>
                                        :
                                        <>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? "active-link" : "link"} to="/login">Login</NavLink>
                                            <NavLink className={({ isActive }) =>
                                                isActive ? "active-link" : "link"} to="/register">Sign up</NavLink>
                                        </>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    );
};

export default Header;