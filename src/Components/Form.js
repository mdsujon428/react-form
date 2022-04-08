import React from 'react';
import '../style/Form.module.css';

const Form = ({handleSubmit,children}) => {
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;