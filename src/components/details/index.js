import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from '../../redux/actions/findCurrentItem';


class Details extends Component {

    componentDidMount() {
        // Ejecutamos la accion y le pasamos el id del item
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId));
    }

    render() {
        const { currentItem } = this.props;

        return (
            <Page 
                currentItem = { currentItem }
                goTo={ (path) => {
                    this.props.history.push(path);
                }}
            />
        );
    }
}

// Usando mapStateToProps, cualquier cosa que retornemos se va a hacer disponible como una propiedad en nuestro componente  
const mapStateToProps = (state) => {
    return {
        currentItem: state.currentItem,
    };
};

const mapDispatchToProps = {
    findCurrentItem,
};

export default withRouter (
    connect(mapStateToProps, mapDispatchToProps)(Details)
);