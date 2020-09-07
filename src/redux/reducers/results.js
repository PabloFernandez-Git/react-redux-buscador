import { type as findResultsType } from "../actions/findResults";
import items from '../../data/items';
const defaultState = [];


function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findResultsType: {
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