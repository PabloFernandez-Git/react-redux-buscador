// Implementar actions en los reducers
// El reducer mantiene toda la logica de la aplicacion y actions simplemente especifican que accion queremos tomar.
// El reducer implementa esa accion.


const defaultState = 0;

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        default:
            return state;
    }
}

export default reducer;