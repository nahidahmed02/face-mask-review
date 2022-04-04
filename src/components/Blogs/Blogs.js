import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 my-4'>
            <h3 className="bg-success p-2">Q: What is the purpose of context API?</h3>
            <p className="bg-light p-2">A: The purpose of context API is to send data directly to a targeted component without sharing it with any other component. We use props to send data from one component to another. In that process, if we want to send data from a grand component to a child component, we have to send data to every component between these two. It is called prop drilling. To avoid prop drilling we use context API. Context API only sends data to the targeted component.</p>


        </div>
    );
};

export default Blogs;