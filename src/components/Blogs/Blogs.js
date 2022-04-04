import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5 my-4'>
            <h3 className="bg-success p-2">Q: What is the purpose of context API?</h3>
            <p className="bg-light p-2">A: The purpose of context API is to send data directly to a targeted component without sharing it with any other component. We use props to send data from one component to another. In that process, if we want to send data from a grand component to a child component, we have to send data to every component between these two. It is called prop drilling. To avoid prop drilling we use context API. Context API only sends data to the targeted component.</p>
            <br />
            <h3 className="bg-success p-2">Q: What is semantic tag?</h3>
            <p className="bg-light p-2">A:  Tags that clearly describe their meaning in a way that both human and machine can understand them are called semantic tag. Semantic tags provide additional information to the browser. By that, the browser understands the roles of that tags. It is used to break the page into identified parts. The semantic tag offers a better user experience. Some semantic tags are header, nav, section, article, footer, details.</p>

        </div>
    );
};

export default Blogs;