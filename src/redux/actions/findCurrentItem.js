// Action Creators
// Te permite definir una funcion que te regresa un objeto y ese objeto es una accion
// Lo que regresa esta funcion es una accion

// La logica no se expresa en el action, sino en el reducer

// El type sirve para identificar una accion, es un string unico, solamente esta accion puede tener este nombre.


export const type = 'findCurrentItem';

const findCurrentItem = id => {
    return {
        type: type,
        payload: id
    };
};

export default findCurrentItem;