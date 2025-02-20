import React from 'react';
import Text from '../utilities/Text';
import PropTypes from 'prop-types';

const BlogList = ({bookmark}) => {
    return (
        <div className='w-full bg-stone-100 py-2 rounded-md pr-20 px-3'>
            <Text tag={`p`} text={bookmark} />
        </div>
    );
};
BlogList.propTypes={
    bookmark : PropTypes.array.isRequired,
}

export default BlogList;

