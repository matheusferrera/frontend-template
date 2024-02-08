/* eslint-disable react/prop-types */
import React from 'react';

const AvisoDePrivacidadeModal = ({ showModal, handleClose }) => {
    return (
        <div>
            {showModal && (
                <div>
                    This is a mocked AvisoDePrivacidadeModal
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
        </div>
    );
};

export default AvisoDePrivacidadeModal;
