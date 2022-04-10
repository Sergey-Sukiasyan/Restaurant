import restaurant from '../../../../../static/images/restaurant.jpg';
import classes from './TestTask.module.css';

function TestTask() {
    return (
        <div>
            <img src={restaurant} className={classes.img} />
            <div className={classes.welcome}>
                <h1>Test Task</h1>
            </div>
        </div>
    )
}

export default TestTask;