import React from 'react';
import BlogContent from './BlogContent';

const Blog = ({data}) => {

    return (
        <div className='w-full'>
            {data && (
                data.map(info=>( <BlogContent key={info.id} data={info} /> ))
            )}
        </div>
        

    );
};

export default Blog;