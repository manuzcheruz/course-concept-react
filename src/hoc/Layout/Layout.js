import React from 'react';
import Aux from '../Aux/Aux';

function Layout(props) {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout;
