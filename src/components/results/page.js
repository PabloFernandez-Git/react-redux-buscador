// Componente presentacional
// CssBaseline => reset de estilos css (material-ui)


import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBAr from '../appBar';


function Page (props) {
    return (
        <Fragment>
            <CssBaseline />
            <AppBAr />
        </Fragment>
    )
}

export default Page;