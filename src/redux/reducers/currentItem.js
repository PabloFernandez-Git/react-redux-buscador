// Implementar actions en los reducers
// El reducer mantiene toda la logica de la aplicacion y actions simplemente especifican que accion queremos tomar.
// El reducer implementa esa accion.

import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';

const defaultState = {};

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case findCurrentItemType: {
            return items.find(n => n.id === payload);
        }

        default:
            return state;
    }
}

export default reducer;