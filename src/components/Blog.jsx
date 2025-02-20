import React from 'react';
import BlogContent from './BlogContent';
import PropTypes from 'prop-types';

const Blog = ({data, clickHandler}) => {

    return (
        <div className='w-full'>
            {data && (
                data.map(info=>( <BlogContent key={info.id} data={info} clickHandler={clickHandler} /> ))
            )}
        </div>
        

    );
};

Blog.propTypes = {
    data: PropTypes.object.isRequired,
    clickHandler: PropTypes.func,
}

export default Blog;