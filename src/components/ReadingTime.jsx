import React from 'react';
import Title from '../utilities/Title';
import PropTypes from 'prop-types';
const ReadingTime = ({readingTime}) => {
    return (
        <div className='w-full py-3 bg-indigo-700/30 border border-indigo-500 rounded-md'>
        
            <Title  tag={`4`} text={`spent time on read : ${readingTime} min`} />
        
        </div>
    );
};
// PropTypes for ReadingTime
ReadingTime.propTypes = {
    readingTime: PropTypes.number.isRequired, // Validates that readingTime is a number
};

export default ReadingTime;