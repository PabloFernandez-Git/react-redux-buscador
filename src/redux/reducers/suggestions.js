// Cuando implementemos un action utilizamos el type y el payload para modificar el estado

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'findSuggestions': {
            return [
                {
                    id: 1,
                    title: 'findSuggestions'
                },
            ];
        }

        default:
            return state;
    }
}

export default reducer;