// Patron de diseño de contenedor (logica) y componente presentacional (parte grafica)
// Usamos React component para crear una clase

import React, { Component } from 'react';
import Page from './page';

class Results extends Component {
    render() {
        return (
            <Page />
        );
    }
}

export default Results;