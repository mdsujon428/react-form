import classes from '../style/FormInput.module.css';

const FormInput = (props) => {
    const {id,label,errorMessage,onChange,...inputProps} = props
    return (
        <div className={classes.formInput}>
            <label>{label}</label>
            <input 
             onChange={onChange}
             {...inputProps}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;