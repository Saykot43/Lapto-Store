import React from 'react';
import './About.css';
import image2 from '../../image/image2.png'

const About = () => {
    return (
        <div className='about py-3'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-8">
                    <div><img className='shadow-sm p-3 mb-5 bg-body rounded img-fluid' src={image2} alt="about img with bike" /></div>
                    </div>
                    <div className="col-lg-4">
                    <div><p className='py-3'>Find Online Marketplace In Bangladesh at Shopwebly, the Website to Compare Prices! Find and Compare Online Marketplace In Bangladesh Online. Save Now at Shopwebly! Quick Results. Find Easily. Easy Acces. Many Products. Search and Discover. Compare Products.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;