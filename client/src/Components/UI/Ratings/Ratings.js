import { Rating } from 'react-simple-star-rating';


function Ratings(props) {
    const obj = {
        tooltipArray: ['Terrible', 'Bad', 'Average', 'Great', 'Prefect'],
    }

    const readOnly = !props.readonly && obj;

    return (
        <Rating
            {...props}
            {...readOnly}
            iconsCount={5}
            fillColorArray={['#f14b45', '#f14b45', '#f1d045', '#f1d045', '#3da204']}
        />
    )
}

export default Ratings;