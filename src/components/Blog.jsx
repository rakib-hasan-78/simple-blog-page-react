import React from 'react';
import BlogContent from './BlogContent';
import PropTypes from 'prop-types';

const Blog = ({data, clickHandler, readingHandler}) => {

    return (
        <div className='w-full'>
            {data && (
                data.map(info=>( <BlogContent key={info.id} data={info} clickHandler={clickHandler} readingHandler={readingHandler} /> ))
            )}
        </div>
        

    );
};

Blog.propTypes = {
    data: PropTypes.array.isRequired,
    clickHandler: PropTypes.func,
    readingHandler: PropTypes.func,
}

export default Blog;