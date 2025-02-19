import React from 'react';
import ReadingTime from './ReadingTime';
import BMBlog from './BMBlog';
import BlogList from './BlogList';

const Sidebar = () => {
    return (
        <sidebar className='flex items-start justify-start space-y-5 flex-col'>
            <ReadingTime />
            <div className='w-full bg-stone-200 py-4 pb-9 flex flex-col items-start rounded-md'>
                <BMBlog />
                <div className='w-10/12 mx-auto flex flex-wrap flex-col items-center justify-center space-y-4'>
                    <BlogList />
                    <BlogList />
                    <BlogList />
                    <BlogList />
                    <BlogList />
                    <BlogList />
                </div>
            </div>
        </sidebar>
    );
};

export default Sidebar;