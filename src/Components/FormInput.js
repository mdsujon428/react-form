import { useState } from 'react';
import classes from '../style/FormInput.module.css';

const FormInput = (props) => {
    const [focused,setFocused] = useState(false)
    const {id,label,value,errorMessage,onChange,...inputProps} = props;

    const handleFocus =(e)=>{
        setFocused(true)
    }
  
    return (
        <div className={classes.formInput}>
            <label>{label}</label>
            <input 
             onChange={onChange}
             onBlur={handleFocus}
             focused={focused.toString()}
             onFocus={()=>inputProps.name ==="confirmPassword" && setFocused(true)}
             {...inputProps}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;