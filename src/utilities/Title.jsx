import PropTypes from 'prop-types';
import React from 'react';

const Title = ({tag, className, text}) => {
    const TAG = `h${tag}`;
    return (
        <TAG  className={` ${className}`}>
            {text}
        </TAG>
    );
};

Title.propTypes = {
    tag:PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired, 
}
export default Title;