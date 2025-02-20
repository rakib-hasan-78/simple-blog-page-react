import PropTypes from 'prop-types';
import React from 'react';

const Text = ({tag, text, className, onClick}) => {
    const TAG = `${tag}`
    return (
        <TAG onClick={onClick} className={`${className}`}>
            {text}
        </TAG>
    );
};

Text.propTypes = {
    tag:PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Text;