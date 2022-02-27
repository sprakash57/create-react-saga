import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message }) => {
    return <h2 className="t-center">{message}</h2>
}

Alert.propTypes = {
    message: PropTypes.string.isRequired
}

export default Alert;