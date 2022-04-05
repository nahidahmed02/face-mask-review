import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css'

const Review = (props) => {
    const { photo, name, comment, rating } = props.review;
    return (
        <div className='col-lg-4'>
            <Card border="dark" style={{ width: 'auto', borderRadius: '20px' }}>
                <Card.Header className='d-flex align-items-center'>
                    <img style={{ 'width': '60px', 'borderRadius': '50%' }} src={photo} alt="" />
                    <h4 className='name ms-3'>{name}</h4>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p className='comment'> "{comment}"</p>
                        <small>Rating: <strong>{rating}/5</strong> </small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;