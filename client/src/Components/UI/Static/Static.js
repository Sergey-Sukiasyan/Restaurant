import classes from "./Static.module.css";

function Static({text}) {
    return (
        <div className={classes.static}>
            <h1 className='text-center'>{text}</h1>
        </div>
    )
}

export default Static;