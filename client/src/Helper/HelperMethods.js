export const copyData = (data) => JSON.parse(JSON.stringify(data));

export const addFeedbackData = (current_data, added_data) => {
    const current_data_copy = copyData(current_data);
    current_data_copy?.feedback.push(added_data);
    return current_data_copy;
}

export const asset = (filename) => process.env.REACT_APP_SERVER_URL + '/images/' + filename;