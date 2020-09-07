import React, { Component } from 'react';
import Page from './page';
import { connect } from 'react-redux';


class IAppBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        // Siempre se tiene que hacer un binding cuando lo pasamos a otro componente
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text) {
        this.setState({
            text
        });
    }
    
    onChangeSelection(text) {

    }

    render() {

        const { text } = this.state;
        const { suggestions } = this.props;

        return (
            <Page
                text = { text }
                suggestions = { suggestions }
                onChangeText = { this.onChangeText }
                onChangeSelection = { this.onChangeSelection }
            />
        );
    }
}

// Funcion que recibe un estado y regresa un objeto. Las propiedades del objeto se hacen disponibles al componente por medio de props.
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

// mapDispatchToProps regresa funciones que son acciones o creadores de acciones (action creators).
const mapDispatchToProps

export default connect(mapStateToProps)(IAppBar);
