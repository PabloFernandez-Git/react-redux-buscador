// Patron de diseño de contenedor (logica) y componente presentacional (parte grafica)
// Usamos React component para crear una clase
// Connect lo que nos permite es conectar nuestro componente para que pueda acceder al estado de los reducer
// mapStateToProps es una funcion que recibe el estado almacenado en el store (dentro del store almacenamos los reducers y accedemos a esa informacion)


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
    render() {
        const { results } = this.props;

        return (
            <Page 
                results = { results }
            />
        );
    }
}

// Usando mapStateToProps, cualquier cosa que retornemos se va a hacer disponible como una propiedad en nuestro componente  
const mapStateToProps = (state) => {
    return {
        results: state.results,
    };
};


export default connect(mapStateToProps)(Results);