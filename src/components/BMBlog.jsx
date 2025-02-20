import React from 'react';
import Title from '../utilities/Title';
import PropTypes from 'prop-types';

const BMBlog = ({bookmark}) => {
    return (
        <div className='w-10/12 py-2 flex items-center justify-center'>
            <Title tag={`3`} text={`bookmarked blogs : ${bookmark.length<10? '0'+bookmark.length: bookmark.length} ` } />
        </div>
    );
};

BMBlog.propTypes={
    bookmark : PropTypes.array.isRequired,
}

export default BMBlog;