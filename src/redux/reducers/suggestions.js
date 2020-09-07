// Cuando implementemos un action utilizamos el type y el payload para modificar el estado
import { type as findSuggestionsType } from "../actions/findSuggestions";
import items from '../../data/items';


const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findSuggestionsType: {
            // Filtrar los resultados basados en la informacion que el usuario ingrese en el input. Para eso usamos una expresion regular.
            const regex = new RegExp(`^${payload}`, 'i');
            
            // Filtro: regresa un booleano. Si pasa el filtro es verdadero y queremos el elemento, si es falso se descarta.
            return items.filter(n => regex.test(n.title));
        }

        default:
            return state;
    }
}

export default reducer;