import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className='d-flex row'>
                <div className='col-lg-6 p-1 my-auto'>
                    <h1 className='upper-h1'>Happy Lungs</h1>
                    <h1 className='lower-h1'>Happy You</h1>
                    <p className='mt-3'>The CDC says that you should wear the most protective mask possible that you'll wear regularly, fits well and is comfortable. Masks meant to protect the wearer from contact with droplets and sprays that may contain germs.</p>
                </div>
                <div className='col-lg-4'>
                    <img src="../../images/mask box.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;