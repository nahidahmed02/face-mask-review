import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Home.css'

const Home = () => {
    const [reviews] = useReviews()
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

            <div className='mt-5'>
                <h3 className='text-center fw-bold'>Customer Reviews({reviews.length})</h3>
            </div>
        </div>
    );
};

export default Home;