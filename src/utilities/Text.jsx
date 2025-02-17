import PropTypes from 'prop-types';
import React from 'react';

const Text = ({tag, text, className}) => {
    const TAG = `${tag}`
    return (
        <TAG className={`${className}`}>
            {text}
        </TAG>
    );
};

Text.propTypes = {
    tag:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
    className: PropTypes.string,
}

export default Text;