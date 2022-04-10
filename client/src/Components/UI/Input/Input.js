function Input({ label, error, ...props }) {

    const style = error ? 'form-control is-invalid' : 'form-control';

    return (
        <div className='mt-3'>
            <label className='labelName'>{label}</label>
            <input {...props} className={style} />
            <div className="feedback text-danger fs-7">{error}</div>
        </div>
    )
}

export default Input;