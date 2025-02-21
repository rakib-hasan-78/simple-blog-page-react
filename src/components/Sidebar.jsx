import React from 'react';
import ReadingTime from './ReadingTime';
import BMBlog from './BMBlog';
import BlogList from './BlogList';
import PropTypes from 'prop-types';

const Sidebar = ({bookmark,  readingTime }) => {
    return (
        <aside className='flex items-start justify-start space-y-5 flex-col'>
            <ReadingTime  readingTime={readingTime} />
            <div className='w-full bg-stone-200 py-4 pb-9 flex flex-col items-start rounded-md'>
                <BMBlog bookmark={bookmark} />
                <div className='w-10/12 mx-auto flex flex-wrap flex-col items-center justify-center space-y-4'>
                {bookmark && bookmark.map((mark,index)=>(  <BlogList key={index+1} bookmark={mark} /> ))}
                </div>
            </div>
        </aside>
    );
};

Sidebar.propTypes={
    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}


export default Sidebar;