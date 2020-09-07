import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';


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

        this.props.findSuggestions(text);
    }
    
    onChangeSelection(text) {
        this.setState({
            text
        });

        this.props.findResults(text);
        this.props.history.push('/results');
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

// mapDispatchToProps regresa como props funciones que son acciones o creadores de acciones (action creators).

/* const mapDispatchToProps = (dispatch) => {
    return {
        findSuggestions: text => dispatch(findSuggestions(text)),
    };
}; */

const mapDispatchToProps = {
    findSuggestions,
    findResults
};

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(IAppBar)
)
