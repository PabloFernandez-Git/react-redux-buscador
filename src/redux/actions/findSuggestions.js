export const type = 'findSuggestions';

const findSuggestions = text => {
    return {
        type: type,
        payload: text
    };
};

export default findSuggestions;